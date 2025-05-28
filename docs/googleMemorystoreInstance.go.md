# `googleMemorystoreInstance` Submodule <a name="`googleMemorystoreInstance` Submodule" id="@cdktf/provider-google-beta.googleMemorystoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemorystoreInstance <a name="GoogleMemorystoreInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance google_memorystore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstance(scope Construct, id *string, config GoogleMemorystoreInstanceConfig) GoogleMemorystoreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig">GoogleMemorystoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig">GoogleMemorystoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putAutomatedBackupConfig">PutAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putCrossInstanceReplicationConfig">PutCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredAutoCreatedEndpoints">PutDesiredAutoCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredPscAutoConnections">PutDesiredPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putGcsSource">PutGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putManagedBackupSource">PutManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putPersistenceConfig">PutPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putZoneDistributionConfig">PutZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetAuthorizationMode">ResetAuthorizationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetAutomatedBackupConfig">ResetAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetCrossInstanceReplicationConfig">ResetCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDesiredAutoCreatedEndpoints">ResetDesiredAutoCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDesiredPscAutoConnections">ResetDesiredPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetEngineConfigs">ResetEngineConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetGcsSource">ResetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetManagedBackupSource">ResetManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetPersistenceConfig">ResetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetTransitEncryptionMode">ResetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetZoneDistributionConfig">ResetZoneDistributionConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomatedBackupConfig` <a name="PutAutomatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putAutomatedBackupConfig"></a>

```go
func PutAutomatedBackupConfig(value GoogleMemorystoreInstanceAutomatedBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putAutomatedBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a>

---

##### `PutCrossInstanceReplicationConfig` <a name="PutCrossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putCrossInstanceReplicationConfig"></a>

```go
func PutCrossInstanceReplicationConfig(value GoogleMemorystoreInstanceCrossInstanceReplicationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putCrossInstanceReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

---

##### `PutDesiredAutoCreatedEndpoints` <a name="PutDesiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredAutoCreatedEndpoints"></a>

```go
func PutDesiredAutoCreatedEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredAutoCreatedEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDesiredPscAutoConnections` <a name="PutDesiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredPscAutoConnections"></a>

```go
func PutDesiredPscAutoConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredPscAutoConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGcsSource` <a name="PutGcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putGcsSource"></a>

```go
func PutGcsSource(value GoogleMemorystoreInstanceGcsSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putGcsSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putMaintenancePolicy"></a>

```go
func PutMaintenancePolicy(value GoogleMemorystoreInstanceMaintenancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a>

---

##### `PutManagedBackupSource` <a name="PutManagedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putManagedBackupSource"></a>

```go
func PutManagedBackupSource(value GoogleMemorystoreInstanceManagedBackupSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putManagedBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a>

---

##### `PutPersistenceConfig` <a name="PutPersistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putPersistenceConfig"></a>

```go
func PutPersistenceConfig(value GoogleMemorystoreInstancePersistenceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleMemorystoreInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a>

---

##### `PutZoneDistributionConfig` <a name="PutZoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putZoneDistributionConfig"></a>

```go
func PutZoneDistributionConfig(value GoogleMemorystoreInstanceZoneDistributionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putZoneDistributionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a>

---

##### `ResetAuthorizationMode` <a name="ResetAuthorizationMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetAuthorizationMode"></a>

```go
func ResetAuthorizationMode()
```

##### `ResetAutomatedBackupConfig` <a name="ResetAutomatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetAutomatedBackupConfig"></a>

```go
func ResetAutomatedBackupConfig()
```

##### `ResetCrossInstanceReplicationConfig` <a name="ResetCrossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetCrossInstanceReplicationConfig"></a>

```go
func ResetCrossInstanceReplicationConfig()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetDesiredAutoCreatedEndpoints` <a name="ResetDesiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDesiredAutoCreatedEndpoints"></a>

```go
func ResetDesiredAutoCreatedEndpoints()
```

##### `ResetDesiredPscAutoConnections` <a name="ResetDesiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDesiredPscAutoConnections"></a>

```go
func ResetDesiredPscAutoConnections()
```

##### `ResetEngineConfigs` <a name="ResetEngineConfigs" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetEngineConfigs"></a>

```go
func ResetEngineConfigs()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetGcsSource` <a name="ResetGcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetGcsSource"></a>

```go
func ResetGcsSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetManagedBackupSource` <a name="ResetManagedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetManagedBackupSource"></a>

```go
func ResetManagedBackupSource()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetMode"></a>

```go
func ResetMode()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetNodeType"></a>

```go
func ResetNodeType()
```

##### `ResetPersistenceConfig` <a name="ResetPersistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetPersistenceConfig"></a>

```go
func ResetPersistenceConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitEncryptionMode` <a name="ResetTransitEncryptionMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetTransitEncryptionMode"></a>

```go
func ResetTransitEncryptionMode()
```

##### `ResetZoneDistributionConfig` <a name="ResetZoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetZoneDistributionConfig"></a>

```go
func ResetZoneDistributionConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.GoogleMemorystoreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.GoogleMemorystoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.GoogleMemorystoreInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.GoogleMemorystoreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleMemorystoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleMemorystoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMemorystoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.automatedBackupConfig">AutomatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.backupCollection">BackupCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.crossInstanceReplicationConfig">CrossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference">GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredAutoCreatedEndpoints">DesiredAutoCreatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList">GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredPscAutoConnections">DesiredPscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList">GoogleMemorystoreInstanceDesiredPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.discoveryEndpoints">DiscoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList">GoogleMemorystoreInstanceDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList">GoogleMemorystoreInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference">GoogleMemorystoreInstanceGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference">GoogleMemorystoreInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList">GoogleMemorystoreInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.managedBackupSource">ManagedBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference">GoogleMemorystoreInstanceManagedBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList">GoogleMemorystoreInstanceNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.pscAttachmentDetails">PscAttachmentDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList">GoogleMemorystoreInstancePscAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.pscAutoConnections">PscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList">GoogleMemorystoreInstancePscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.stateInfo">StateInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList">GoogleMemorystoreInstanceStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference">GoogleMemorystoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.zoneDistributionConfig">ZoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference">GoogleMemorystoreInstanceZoneDistributionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.authorizationModeInput">AuthorizationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.automatedBackupConfigInput">AutomatedBackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.crossInstanceReplicationConfigInput">CrossInstanceReplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredAutoCreatedEndpointsInput">DesiredAutoCreatedEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredPscAutoConnectionsInput">DesiredPscAutoConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineConfigsInput">EngineConfigsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.gcsSourceInput">GcsSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.managedBackupSourceInput">ManagedBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.persistenceConfigInput">PersistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.shardCountInput">ShardCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.transitEncryptionModeInput">TransitEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.zoneDistributionConfigInput">ZoneDistributionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.authorizationMode">AuthorizationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineConfigs">EngineConfigs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.shardCount">ShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomatedBackupConfig`<sup>Required</sup> <a name="AutomatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.automatedBackupConfig"></a>

```go
func AutomatedBackupConfig() GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference</a>

---

##### `BackupCollection`<sup>Required</sup> <a name="BackupCollection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.backupCollection"></a>

```go
func BackupCollection() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CrossInstanceReplicationConfig`<sup>Required</sup> <a name="CrossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.crossInstanceReplicationConfig"></a>

```go
func CrossInstanceReplicationConfig() GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference">GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference</a>

---

##### `DesiredAutoCreatedEndpoints`<sup>Required</sup> <a name="DesiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredAutoCreatedEndpoints"></a>

```go
func DesiredAutoCreatedEndpoints() GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList">GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList</a>

---

##### `DesiredPscAutoConnections`<sup>Required</sup> <a name="DesiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredPscAutoConnections"></a>

```go
func DesiredPscAutoConnections() GoogleMemorystoreInstanceDesiredPscAutoConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList">GoogleMemorystoreInstanceDesiredPscAutoConnectionsList</a>

---

##### `DiscoveryEndpoints`<sup>Required</sup> <a name="DiscoveryEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.discoveryEndpoints"></a>

```go
func DiscoveryEndpoints() GoogleMemorystoreInstanceDiscoveryEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList">GoogleMemorystoreInstanceDiscoveryEndpointsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.endpoints"></a>

```go
func Endpoints() GoogleMemorystoreInstanceEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList">GoogleMemorystoreInstanceEndpointsList</a>

---

##### `GcsSource`<sup>Required</sup> <a name="GcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.gcsSource"></a>

```go
func GcsSource() GoogleMemorystoreInstanceGcsSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference">GoogleMemorystoreInstanceGcsSourceOutputReference</a>

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() GoogleMemorystoreInstanceMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference">GoogleMemorystoreInstanceMaintenancePolicyOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() GoogleMemorystoreInstanceMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList">GoogleMemorystoreInstanceMaintenanceScheduleList</a>

---

##### `ManagedBackupSource`<sup>Required</sup> <a name="ManagedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.managedBackupSource"></a>

```go
func ManagedBackupSource() GoogleMemorystoreInstanceManagedBackupSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference">GoogleMemorystoreInstanceManagedBackupSourceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeConfig"></a>

```go
func NodeConfig() GoogleMemorystoreInstanceNodeConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList">GoogleMemorystoreInstanceNodeConfigList</a>

---

##### `PersistenceConfig`<sup>Required</sup> <a name="PersistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.persistenceConfig"></a>

```go
func PersistenceConfig() GoogleMemorystoreInstancePersistenceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigOutputReference</a>

---

##### `PscAttachmentDetails`<sup>Required</sup> <a name="PscAttachmentDetails" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.pscAttachmentDetails"></a>

```go
func PscAttachmentDetails() GoogleMemorystoreInstancePscAttachmentDetailsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList">GoogleMemorystoreInstancePscAttachmentDetailsList</a>

---

##### `PscAutoConnections`<sup>Required</sup> <a name="PscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.pscAutoConnections"></a>

```go
func PscAutoConnections() GoogleMemorystoreInstancePscAutoConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList">GoogleMemorystoreInstancePscAutoConnectionsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInfo`<sup>Required</sup> <a name="StateInfo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.stateInfo"></a>

```go
func StateInfo() GoogleMemorystoreInstanceStateInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList">GoogleMemorystoreInstanceStateInfoList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.timeouts"></a>

```go
func Timeouts() GoogleMemorystoreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference">GoogleMemorystoreInstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ZoneDistributionConfig`<sup>Required</sup> <a name="ZoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.zoneDistributionConfig"></a>

```go
func ZoneDistributionConfig() GoogleMemorystoreInstanceZoneDistributionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference">GoogleMemorystoreInstanceZoneDistributionConfigOutputReference</a>

---

##### `AuthorizationModeInput`<sup>Optional</sup> <a name="AuthorizationModeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.authorizationModeInput"></a>

```go
func AuthorizationModeInput() *string
```

- *Type:* *string

---

##### `AutomatedBackupConfigInput`<sup>Optional</sup> <a name="AutomatedBackupConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.automatedBackupConfigInput"></a>

```go
func AutomatedBackupConfigInput() GoogleMemorystoreInstanceAutomatedBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a>

---

##### `CrossInstanceReplicationConfigInput`<sup>Optional</sup> <a name="CrossInstanceReplicationConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.crossInstanceReplicationConfigInput"></a>

```go
func CrossInstanceReplicationConfigInput() GoogleMemorystoreInstanceCrossInstanceReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DesiredAutoCreatedEndpointsInput`<sup>Optional</sup> <a name="DesiredAutoCreatedEndpointsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredAutoCreatedEndpointsInput"></a>

```go
func DesiredAutoCreatedEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `DesiredPscAutoConnectionsInput`<sup>Optional</sup> <a name="DesiredPscAutoConnectionsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredPscAutoConnectionsInput"></a>

```go
func DesiredPscAutoConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `EngineConfigsInput`<sup>Optional</sup> <a name="EngineConfigsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineConfigsInput"></a>

```go
func EngineConfigsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `GcsSourceInput`<sup>Optional</sup> <a name="GcsSourceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.gcsSourceInput"></a>

```go
func GcsSourceInput() GoogleMemorystoreInstanceGcsSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() GoogleMemorystoreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a>

---

##### `ManagedBackupSourceInput`<sup>Optional</sup> <a name="ManagedBackupSourceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.managedBackupSourceInput"></a>

```go
func ManagedBackupSourceInput() GoogleMemorystoreInstanceManagedBackupSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `PersistenceConfigInput`<sup>Optional</sup> <a name="PersistenceConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.persistenceConfigInput"></a>

```go
func PersistenceConfigInput() GoogleMemorystoreInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `ShardCountInput`<sup>Optional</sup> <a name="ShardCountInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.shardCountInput"></a>

```go
func ShardCountInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionModeInput`<sup>Optional</sup> <a name="TransitEncryptionModeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.transitEncryptionModeInput"></a>

```go
func TransitEncryptionModeInput() *string
```

- *Type:* *string

---

##### `ZoneDistributionConfigInput`<sup>Optional</sup> <a name="ZoneDistributionConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.zoneDistributionConfigInput"></a>

```go
func ZoneDistributionConfigInput() GoogleMemorystoreInstanceZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a>

---

##### `AuthorizationMode`<sup>Required</sup> <a name="AuthorizationMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.authorizationMode"></a>

```go
func AuthorizationMode() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `EngineConfigs`<sup>Required</sup> <a name="EngineConfigs" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineConfigs"></a>

```go
func EngineConfigs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.shardCount"></a>

```go
func ShardCount() *f64
```

- *Type:* *f64

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.transitEncryptionMode"></a>

```go
func TransitEncryptionMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemorystoreInstanceAutomatedBackupConfig <a name="GoogleMemorystoreInstanceAutomatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceAutomatedBackupConfig {
	FixedFrequencySchedule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule,
	Retention: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.property.fixedFrequencySchedule">FixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | fixed_frequency_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.property.retention">Retention</a></code> | <code>*string</code> | How long to keep automated backups before the backups are deleted. |

---

##### `FixedFrequencySchedule`<sup>Required</sup> <a name="FixedFrequencySchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.property.fixedFrequencySchedule"></a>

```go
FixedFrequencySchedule GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

fixed_frequency_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#fixed_frequency_schedule GoogleMemorystoreInstance#fixed_frequency_schedule}

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.property.retention"></a>

```go
Retention *string
```

- *Type:* *string

How long to keep automated backups before the backups are deleted.

The value should be between 1 day and 365 days. If not specified, the default value is 35 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". The default_value is "3024000s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#retention GoogleMemorystoreInstance#retention}

---

### GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule <a name="GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule {
	StartTime: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | start_time block. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.property.startTime"></a>

```go
StartTime GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#start_time GoogleMemorystoreInstance#start_time}

---

### GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime <a name="GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime {
	Hours: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of a day in 24 hour format. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#hours GoogleMemorystoreInstance#hours}

---

### GoogleMemorystoreInstanceConfig <a name="GoogleMemorystoreInstanceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Location: *string,
	ShardCount: *f64,
	AuthorizationMode: *string,
	AutomatedBackupConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig,
	CrossInstanceReplicationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig,
	DeletionProtectionEnabled: interface{},
	DesiredAutoCreatedEndpoints: interface{},
	DesiredPscAutoConnections: interface{},
	EngineConfigs: *map[string]*string,
	EngineVersion: *string,
	GcsSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource,
	Id: *string,
	Labels: *map[string]*string,
	MaintenancePolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy,
	ManagedBackupSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource,
	Mode: *string,
	NodeType: *string,
	PersistenceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig,
	Project: *string,
	ReplicaCount: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts,
	TransitEncryptionMode: *string,
	ZoneDistributionConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Required. The ID to use for the instance, which will become the final component of the instance's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.shardCount">ShardCount</a></code> | <code>*f64</code> | Required. Number of shards for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.authorizationMode">AuthorizationMode</a></code> | <code>*string</code> | Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.automatedBackupConfig">AutomatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a></code> | automated_backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.crossInstanceReplicationConfig">CrossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a></code> | cross_instance_replication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | Optional. If set to true deletion of the instance will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.desiredAutoCreatedEndpoints">DesiredAutoCreatedEndpoints</a></code> | <code>interface{}</code> | desired_auto_created_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.desiredPscAutoConnections">DesiredPscAutoConnections</a></code> | <code>interface{}</code> | desired_psc_auto_connections block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.engineConfigs">EngineConfigs</a></code> | <code>*map[string]*string</code> | Optional. User-provided engine configurations for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Optional. Engine version of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#id GoogleMemorystoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.managedBackupSource">ManagedBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a></code> | managed_backup_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.mode">Mode</a></code> | <code>*string</code> | Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#project GoogleMemorystoreInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | Optional. Number of replica nodes per shard. If omitted the default is 0 replicas. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.zoneDistributionConfig">ZoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Required. The ID to use for the instance, which will become the final component of the instance's resource name.

This value is subject to the following restrictions:

* Must be 4-63 characters in length
* Must begin with a letter or digit
* Must contain only lowercase letters, digits, and hyphens
* Must not end with a hyphen
* Must be unique within a location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#instance_id GoogleMemorystoreInstance#instance_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#location GoogleMemorystoreInstance#location}

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.shardCount"></a>

```go
ShardCount *f64
```

- *Type:* *f64

Required. Number of shards for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#shard_count GoogleMemorystoreInstance#shard_count}

---

##### `AuthorizationMode`<sup>Optional</sup> <a name="AuthorizationMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.authorizationMode"></a>

```go
AuthorizationMode *string
```

- *Type:* *string

Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#authorization_mode GoogleMemorystoreInstance#authorization_mode}

---

##### `AutomatedBackupConfig`<sup>Optional</sup> <a name="AutomatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.automatedBackupConfig"></a>

```go
AutomatedBackupConfig GoogleMemorystoreInstanceAutomatedBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a>

automated_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#automated_backup_config GoogleMemorystoreInstance#automated_backup_config}

---

##### `CrossInstanceReplicationConfig`<sup>Optional</sup> <a name="CrossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.crossInstanceReplicationConfig"></a>

```go
CrossInstanceReplicationConfig GoogleMemorystoreInstanceCrossInstanceReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

cross_instance_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#cross_instance_replication_config GoogleMemorystoreInstance#cross_instance_replication_config}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Optional. If set to true deletion of the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#deletion_protection_enabled GoogleMemorystoreInstance#deletion_protection_enabled}

---

##### `DesiredAutoCreatedEndpoints`<sup>Optional</sup> <a name="DesiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.desiredAutoCreatedEndpoints"></a>

```go
DesiredAutoCreatedEndpoints interface{}
```

- *Type:* interface{}

desired_auto_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#desired_auto_created_endpoints GoogleMemorystoreInstance#desired_auto_created_endpoints}

---

##### `DesiredPscAutoConnections`<sup>Optional</sup> <a name="DesiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.desiredPscAutoConnections"></a>

```go
DesiredPscAutoConnections interface{}
```

- *Type:* interface{}

desired_psc_auto_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#desired_psc_auto_connections GoogleMemorystoreInstance#desired_psc_auto_connections}

---

##### `EngineConfigs`<sup>Optional</sup> <a name="EngineConfigs" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.engineConfigs"></a>

```go
EngineConfigs *map[string]*string
```

- *Type:* *map[string]*string

Optional. User-provided engine configurations for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#engine_configs GoogleMemorystoreInstance#engine_configs}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Optional. Engine version of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#engine_version GoogleMemorystoreInstance#engine_version}

---

##### `GcsSource`<sup>Optional</sup> <a name="GcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.gcsSource"></a>

```go
GcsSource GoogleMemorystoreInstanceGcsSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#gcs_source GoogleMemorystoreInstance#gcs_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#id GoogleMemorystoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#labels GoogleMemorystoreInstance#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy GoogleMemorystoreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#maintenance_policy GoogleMemorystoreInstance#maintenance_policy}

---

##### `ManagedBackupSource`<sup>Optional</sup> <a name="ManagedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.managedBackupSource"></a>

```go
ManagedBackupSource GoogleMemorystoreInstanceManagedBackupSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a>

managed_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#managed_backup_source GoogleMemorystoreInstance#managed_backup_source}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#node_type GoogleMemorystoreInstance#node_type}

---

##### `PersistenceConfig`<sup>Optional</sup> <a name="PersistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.persistenceConfig"></a>

```go
PersistenceConfig GoogleMemorystoreInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#persistence_config GoogleMemorystoreInstance#persistence_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#project GoogleMemorystoreInstance#project}.

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.replicaCount"></a>

```go
ReplicaCount *f64
```

- *Type:* *f64

Optional. Number of replica nodes per shard. If omitted the default is 0 replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#replica_count GoogleMemorystoreInstance#replica_count}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleMemorystoreInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#timeouts GoogleMemorystoreInstance#timeouts}

---

##### `TransitEncryptionMode`<sup>Optional</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.transitEncryptionMode"></a>

```go
TransitEncryptionMode *string
```

- *Type:* *string

Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#transit_encryption_mode GoogleMemorystoreInstance#transit_encryption_mode}

---

##### `ZoneDistributionConfig`<sup>Optional</sup> <a name="ZoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.zoneDistributionConfig"></a>

```go
ZoneDistributionConfig GoogleMemorystoreInstanceZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#zone_distribution_config GoogleMemorystoreInstance#zone_distribution_config}

---

### GoogleMemorystoreInstanceCrossInstanceReplicationConfig <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig {
	InstanceRole: *string,
	PrimaryInstance: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance,
	SecondaryInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.instanceRole">InstanceRole</a></code> | <code>*string</code> | The instance role supports the following values: 1. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.primaryInstance">PrimaryInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | primary_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.secondaryInstances">SecondaryInstances</a></code> | <code>interface{}</code> | secondary_instances block. |

---

##### `InstanceRole`<sup>Optional</sup> <a name="InstanceRole" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.instanceRole"></a>

```go
InstanceRole *string
```

- *Type:* *string

The instance role supports the following values: 1.

'INSTANCE_ROLE_UNSPECIFIED': This is an independent instance that has never participated in cross instance replication. It allows both reads and writes.
2. 'NONE': This is an independent instance that previously participated in cross instance replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
3. 'PRIMARY': This instance serves as the replication source for secondary instance that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
4. 'SECONDARY': This instance replicates data from the primary instance. It allows only reads. Possible values: ["INSTANCE_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#instance_role GoogleMemorystoreInstance#instance_role}

---

##### `PrimaryInstance`<sup>Optional</sup> <a name="PrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.primaryInstance"></a>

```go
PrimaryInstance GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

primary_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#primary_instance GoogleMemorystoreInstance#primary_instance}

---

##### `SecondaryInstances`<sup>Optional</sup> <a name="SecondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.secondaryInstances"></a>

```go
SecondaryInstances interface{}
```

- *Type:* interface{}

secondary_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#secondary_instances GoogleMemorystoreInstance#secondary_instances}

---

### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership {

}
```


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance {

}
```


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance {

}
```


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance {
	Instance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.property.instance">Instance</a></code> | <code>*string</code> | The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#instance GoogleMemorystoreInstance#instance}

---

### GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances {
	Instance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.property.instance">Instance</a></code> | <code>*string</code> | The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#instance GoogleMemorystoreInstance#instance}

---

### GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints <a name="GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints {
	Network: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.property.network">Network</a></code> | <code>*string</code> | Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.property.projectId">ProjectId</a></code> | <code>*string</code> | Required. The consumer project_id where the forwarding rule is created from. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.property.network"></a>

```go
Network *string
```

- *Type:* *string

Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#network GoogleMemorystoreInstance#network}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Required. The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#project_id GoogleMemorystoreInstance#project_id}

---

### GoogleMemorystoreInstanceDesiredPscAutoConnections <a name="GoogleMemorystoreInstanceDesiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceDesiredPscAutoConnections {
	Network: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.property.network">Network</a></code> | <code>*string</code> | Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.property.projectId">ProjectId</a></code> | <code>*string</code> | Required. The consumer project_id where the forwarding rule is created from. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.property.network"></a>

```go
Network *string
```

- *Type:* *string

Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#network GoogleMemorystoreInstance#network}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Required. The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#project_id GoogleMemorystoreInstance#project_id}

---

### GoogleMemorystoreInstanceDiscoveryEndpoints <a name="GoogleMemorystoreInstanceDiscoveryEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceDiscoveryEndpoints {

}
```


### GoogleMemorystoreInstanceEndpoints <a name="GoogleMemorystoreInstanceEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceEndpoints {

}
```


### GoogleMemorystoreInstanceEndpointsConnections <a name="GoogleMemorystoreInstanceEndpointsConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceEndpointsConnections {

}
```


### GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection <a name="GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection {

}
```


### GoogleMemorystoreInstanceGcsSource <a name="GoogleMemorystoreInstanceGcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceGcsSource {
	Uris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource.property.uris">Uris</a></code> | <code>*[]*string</code> | URIs of the GCS objects to import. Example: gs://bucket1/object1, gs//bucket2/folder2/object2. |

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource.property.uris"></a>

```go
Uris *[]*string
```

- *Type:* *[]*string

URIs of the GCS objects to import. Example: gs://bucket1/object1, gs//bucket2/folder2/object2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#uris GoogleMemorystoreInstance#uris}

---

### GoogleMemorystoreInstanceMaintenancePolicy <a name="GoogleMemorystoreInstanceMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceMaintenancePolicy {
	WeeklyMaintenanceWindow: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code>interface{}</code> | weekly_maintenance_window block. |

---

##### `WeeklyMaintenanceWindow`<sup>Optional</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```go
WeeklyMaintenanceWindow interface{}
```

- *Type:* interface{}

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#weekly_maintenance_window GoogleMemorystoreInstance#weekly_maintenance_window}

---

### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow {
	Day: *string,
	StartTime: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">Day</a></code> | <code>*string</code> | The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```go
Day *string
```

- *Type:* *string

The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#day GoogleMemorystoreInstance#day}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```go
StartTime GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#start_time GoogleMemorystoreInstance#start_time}

---

### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#hours GoogleMemorystoreInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#minutes GoogleMemorystoreInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#nanos GoogleMemorystoreInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#seconds GoogleMemorystoreInstance#seconds}

---

### GoogleMemorystoreInstanceMaintenanceSchedule <a name="GoogleMemorystoreInstanceMaintenanceSchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceMaintenanceSchedule {

}
```


### GoogleMemorystoreInstanceManagedBackupSource <a name="GoogleMemorystoreInstanceManagedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceManagedBackupSource {
	Backup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource.property.backup">Backup</a></code> | <code>*string</code> | Example: //memorystore.googleapis.com/projects/{project}/locations/{location}/backups/{backupId}. In this case, it assumes the backup is under memorystore.googleapis.com. |

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource.property.backup"></a>

```go
Backup *string
```

- *Type:* *string

Example: //memorystore.googleapis.com/projects/{project}/locations/{location}/backups/{backupId}. In this case, it assumes the backup is under memorystore.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#backup GoogleMemorystoreInstance#backup}

---

### GoogleMemorystoreInstanceNodeConfig <a name="GoogleMemorystoreInstanceNodeConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceNodeConfig {

}
```


### GoogleMemorystoreInstancePersistenceConfig <a name="GoogleMemorystoreInstancePersistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstancePersistenceConfig {
	AofConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig,
	Mode: *string,
	RdbConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.aofConfig">AofConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a></code> | aof_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.mode">Mode</a></code> | <code>*string</code> | Optional. Current persistence mode.   Possible values: DISABLED RDB AOF Possible values: ["DISABLED", "RDB", "AOF"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.rdbConfig">RdbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a></code> | rdb_config block. |

---

##### `AofConfig`<sup>Optional</sup> <a name="AofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.aofConfig"></a>

```go
AofConfig GoogleMemorystoreInstancePersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a>

aof_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#aof_config GoogleMemorystoreInstance#aof_config}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Optional. Current persistence mode.   Possible values: DISABLED RDB AOF Possible values: ["DISABLED", "RDB", "AOF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}

---

##### `RdbConfig`<sup>Optional</sup> <a name="RdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.rdbConfig"></a>

```go
RdbConfig GoogleMemorystoreInstancePersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

rdb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#rdb_config GoogleMemorystoreInstance#rdb_config}

---

### GoogleMemorystoreInstancePersistenceConfigAofConfig <a name="GoogleMemorystoreInstancePersistenceConfigAofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstancePersistenceConfigAofConfig {
	AppendFsync: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig.property.appendFsync">AppendFsync</a></code> | <code>*string</code> | Optional. The fsync mode.   Possible values:  NEVER EVERY_SEC ALWAYS. |

---

##### `AppendFsync`<sup>Optional</sup> <a name="AppendFsync" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig.property.appendFsync"></a>

```go
AppendFsync *string
```

- *Type:* *string

Optional. The fsync mode.   Possible values:  NEVER EVERY_SEC ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#append_fsync GoogleMemorystoreInstance#append_fsync}

---

### GoogleMemorystoreInstancePersistenceConfigRdbConfig <a name="GoogleMemorystoreInstancePersistenceConfigRdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig {
	RdbSnapshotPeriod: *string,
	RdbSnapshotStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>*string</code> | Optional. Period between RDB snapshots.   Possible values:  ONE_HOUR SIX_HOURS TWELVE_HOURS TWENTY_FOUR_HOURS. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>*string</code> | Optional. |

---

##### `RdbSnapshotPeriod`<sup>Optional</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotPeriod"></a>

```go
RdbSnapshotPeriod *string
```

- *Type:* *string

Optional. Period between RDB snapshots.   Possible values:  ONE_HOUR SIX_HOURS TWELVE_HOURS TWENTY_FOUR_HOURS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#rdb_snapshot_period GoogleMemorystoreInstance#rdb_snapshot_period}

---

##### `RdbSnapshotStartTime`<sup>Optional</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotStartTime"></a>

```go
RdbSnapshotStartTime *string
```

- *Type:* *string

Optional.

Time that the first snapshot was/will be attempted, and to which future
snapshots will be aligned. If not provided, the current time will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#rdb_snapshot_start_time GoogleMemorystoreInstance#rdb_snapshot_start_time}

---

### GoogleMemorystoreInstancePscAttachmentDetails <a name="GoogleMemorystoreInstancePscAttachmentDetails" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstancePscAttachmentDetails {

}
```


### GoogleMemorystoreInstancePscAutoConnections <a name="GoogleMemorystoreInstancePscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstancePscAutoConnections {

}
```


### GoogleMemorystoreInstanceStateInfo <a name="GoogleMemorystoreInstanceStateInfo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceStateInfo {

}
```


### GoogleMemorystoreInstanceStateInfoUpdateInfo <a name="GoogleMemorystoreInstanceStateInfoUpdateInfo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceStateInfoUpdateInfo {

}
```


### GoogleMemorystoreInstanceTimeouts <a name="GoogleMemorystoreInstanceTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#create GoogleMemorystoreInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#delete GoogleMemorystoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#update GoogleMemorystoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#create GoogleMemorystoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#delete GoogleMemorystoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#update GoogleMemorystoreInstance#update}.

---

### GoogleMemorystoreInstanceZoneDistributionConfig <a name="GoogleMemorystoreInstanceZoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

&googlememorystoreinstance.GoogleMemorystoreInstanceZoneDistributionConfig {
	Mode: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.property.mode">Mode</a></code> | <code>*string</code> | Optional. Current zone distribution mode. Defaults to MULTI_ZONE.   Possible values:  MULTI_ZONE SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.property.zone">Zone</a></code> | <code>*string</code> | Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Optional. Current zone distribution mode. Defaults to MULTI_ZONE.   Possible values:  MULTI_ZONE SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_memorystore_instance#zone GoogleMemorystoreInstance#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference <a name="GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime"></a>

```go
func PutStartTime(value GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime"></a>

```go
func StartTime() GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


### GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference <a name="GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


### GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference <a name="GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule">PutFixedFrequencySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedFrequencySchedule` <a name="PutFixedFrequencySchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule"></a>

```go
func PutFixedFrequencySchedule(value GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule">FixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput">FixedFrequencyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retentionInput">RetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention">Retention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedFrequencySchedule`<sup>Required</sup> <a name="FixedFrequencySchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule"></a>

```go
func FixedFrequencySchedule() GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a>

---

##### `FixedFrequencyScheduleInput`<sup>Optional</sup> <a name="FixedFrequencyScheduleInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput"></a>

```go
func FixedFrequencyScheduleInput() GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retentionInput"></a>

```go
func RetentionInput() *string
```

- *Type:* *string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention"></a>

```go
func Retention() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceAutomatedBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance">PrimaryInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance">SecondaryInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryInstance`<sup>Required</sup> <a name="PrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance"></a>

```go
func PrimaryInstance() GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a>

---

##### `SecondaryInstance`<sup>Required</sup> <a name="SecondaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance"></a>

```go
func SecondaryInstance() GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance">PutPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances">PutSecondaryInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetInstanceRole">ResetInstanceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetPrimaryInstance">ResetPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetSecondaryInstances">ResetSecondaryInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryInstance` <a name="PutPrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance"></a>

```go
func PutPrimaryInstance(value GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---

##### `PutSecondaryInstances` <a name="PutSecondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances"></a>

```go
func PutSecondaryInstances(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInstanceRole` <a name="ResetInstanceRole" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetInstanceRole"></a>

```go
func ResetInstanceRole()
```

##### `ResetPrimaryInstance` <a name="ResetPrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetPrimaryInstance"></a>

```go
func ResetPrimaryInstance()
```

##### `ResetSecondaryInstances` <a name="ResetSecondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetSecondaryInstances"></a>

```go
func ResetSecondaryInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership">Membership</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance">PrimaryInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances">SecondaryInstances</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRoleInput">InstanceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstanceInput">PrimaryInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstancesInput">SecondaryInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole">InstanceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership"></a>

```go
func Membership() GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a>

---

##### `PrimaryInstance`<sup>Required</sup> <a name="PrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance"></a>

```go
func PrimaryInstance() GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference</a>

---

##### `SecondaryInstances`<sup>Required</sup> <a name="SecondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances"></a>

```go
func SecondaryInstances() GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InstanceRoleInput`<sup>Optional</sup> <a name="InstanceRoleInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRoleInput"></a>

```go
func InstanceRoleInput() *string
```

- *Type:* *string

---

##### `PrimaryInstanceInput`<sup>Optional</sup> <a name="PrimaryInstanceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstanceInput"></a>

```go
func PrimaryInstanceInput() GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---

##### `SecondaryInstancesInput`<sup>Optional</sup> <a name="SecondaryInstancesInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstancesInput"></a>

```go
func SecondaryInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceRole`<sup>Required</sup> <a name="InstanceRole" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole"></a>

```go
func InstanceRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceCrossInstanceReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resetInstance"></a>

```go
func ResetInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resetInstance"></a>

```go
func ResetInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList <a name="GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference <a name="GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceDesiredPscAutoConnectionsList <a name="GoogleMemorystoreInstanceDesiredPscAutoConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceDesiredPscAutoConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceDesiredPscAutoConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference <a name="GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceDiscoveryEndpointsList <a name="GoogleMemorystoreInstanceDiscoveryEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceDiscoveryEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceDiscoveryEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference <a name="GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints">GoogleMemorystoreInstanceDiscoveryEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceDiscoveryEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints">GoogleMemorystoreInstanceDiscoveryEndpoints</a>

---


### GoogleMemorystoreInstanceEndpointsConnectionsList <a name="GoogleMemorystoreInstanceEndpointsConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceEndpointsConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceEndpointsConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceEndpointsConnectionsOutputReference <a name="GoogleMemorystoreInstanceEndpointsConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceEndpointsConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceEndpointsConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection">PscAutoConnection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections">GoogleMemorystoreInstanceEndpointsConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PscAutoConnection`<sup>Required</sup> <a name="PscAutoConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection"></a>

```go
func PscAutoConnection() GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceEndpointsConnections
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections">GoogleMemorystoreInstanceEndpointsConnections</a>

---


### GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList <a name="GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference <a name="GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection">GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection">GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection</a>

---


### GoogleMemorystoreInstanceEndpointsList <a name="GoogleMemorystoreInstanceEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceEndpointsOutputReference <a name="GoogleMemorystoreInstanceEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList">GoogleMemorystoreInstanceEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints">GoogleMemorystoreInstanceEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.connections"></a>

```go
func Connections() GoogleMemorystoreInstanceEndpointsConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList">GoogleMemorystoreInstanceEndpointsConnectionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints">GoogleMemorystoreInstanceEndpoints</a>

---


### GoogleMemorystoreInstanceGcsSourceOutputReference <a name="GoogleMemorystoreInstanceGcsSourceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceGcsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceGcsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.urisInput">UrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.uris">Uris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UrisInput`<sup>Optional</sup> <a name="UrisInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.urisInput"></a>

```go
func UrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.uris"></a>

```go
func Uris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceGcsSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a>

---


### GoogleMemorystoreInstanceMaintenancePolicyOutputReference <a name="GoogleMemorystoreInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">PutWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">ResetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeeklyMaintenanceWindow` <a name="PutWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```go
func PutWeeklyMaintenanceWindow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetWeeklyMaintenanceWindow` <a name="ResetWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```go
func ResetWeeklyMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">WeeklyMaintenanceWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindow`<sup>Required</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```go
func WeeklyMaintenanceWindow() GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `WeeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```go
func WeeklyMaintenanceWindowInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a>

---


### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```go
func PutStartTime(value GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### GoogleMemorystoreInstanceMaintenanceScheduleList <a name="GoogleMemorystoreInstanceMaintenanceScheduleList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceMaintenanceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceMaintenanceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceMaintenanceScheduleOutputReference <a name="GoogleMemorystoreInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">ScheduleDeadlineTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule">GoogleMemorystoreInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `ScheduleDeadlineTime`<sup>Required</sup> <a name="ScheduleDeadlineTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```go
func ScheduleDeadlineTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule">GoogleMemorystoreInstanceMaintenanceSchedule</a>

---


### GoogleMemorystoreInstanceManagedBackupSourceOutputReference <a name="GoogleMemorystoreInstanceManagedBackupSourceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceManagedBackupSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceManagedBackupSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backupInput">BackupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backup">Backup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backupInput"></a>

```go
func BackupInput() *string
```

- *Type:* *string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backup"></a>

```go
func Backup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceManagedBackupSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a>

---


### GoogleMemorystoreInstanceNodeConfigList <a name="GoogleMemorystoreInstanceNodeConfigList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceNodeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceNodeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceNodeConfigOutputReference <a name="GoogleMemorystoreInstanceNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig">GoogleMemorystoreInstanceNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig">GoogleMemorystoreInstanceNodeConfig</a>

---


### GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference <a name="GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resetAppendFsync">ResetAppendFsync</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppendFsync` <a name="ResetAppendFsync" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resetAppendFsync"></a>

```go
func ResetAppendFsync()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsyncInput">AppendFsyncInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync">AppendFsync</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppendFsyncInput`<sup>Optional</sup> <a name="AppendFsyncInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsyncInput"></a>

```go
func AppendFsyncInput() *string
```

- *Type:* *string

---

##### `AppendFsync`<sup>Required</sup> <a name="AppendFsync" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```go
func AppendFsync() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstancePersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a>

---


### GoogleMemorystoreInstancePersistenceConfigOutputReference <a name="GoogleMemorystoreInstancePersistenceConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstancePersistenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstancePersistenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putAofConfig">PutAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putRdbConfig">PutRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetAofConfig">ResetAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetRdbConfig">ResetRdbConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAofConfig` <a name="PutAofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putAofConfig"></a>

```go
func PutAofConfig(value GoogleMemorystoreInstancePersistenceConfigAofConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putAofConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a>

---

##### `PutRdbConfig` <a name="PutRdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putRdbConfig"></a>

```go
func PutRdbConfig(value GoogleMemorystoreInstancePersistenceConfigRdbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putRdbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

---

##### `ResetAofConfig` <a name="ResetAofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetAofConfig"></a>

```go
func ResetAofConfig()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetRdbConfig` <a name="ResetRdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetRdbConfig"></a>

```go
func ResetRdbConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfig">AofConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig">RdbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfigInput">AofConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfigInput">RdbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AofConfig`<sup>Required</sup> <a name="AofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfig"></a>

```go
func AofConfig() GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference</a>

---

##### `RdbConfig`<sup>Required</sup> <a name="RdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig"></a>

```go
func RdbConfig() GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference</a>

---

##### `AofConfigInput`<sup>Optional</sup> <a name="AofConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfigInput"></a>

```go
func AofConfigInput() GoogleMemorystoreInstancePersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `RdbConfigInput`<sup>Optional</sup> <a name="RdbConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfigInput"></a>

```go
func RdbConfigInput() GoogleMemorystoreInstancePersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a>

---


### GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference <a name="GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod">ResetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime">ResetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRdbSnapshotPeriod` <a name="ResetRdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod"></a>

```go
func ResetRdbSnapshotPeriod()
```

##### `ResetRdbSnapshotStartTime` <a name="ResetRdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime"></a>

```go
func ResetRdbSnapshotStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput">RdbSnapshotPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput">RdbSnapshotStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RdbSnapshotPeriodInput`<sup>Optional</sup> <a name="RdbSnapshotPeriodInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```go
func RdbSnapshotPeriodInput() *string
```

- *Type:* *string

---

##### `RdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="RdbSnapshotStartTimeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```go
func RdbSnapshotStartTimeInput() *string
```

- *Type:* *string

---

##### `RdbSnapshotPeriod`<sup>Required</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```go
func RdbSnapshotPeriod() *string
```

- *Type:* *string

---

##### `RdbSnapshotStartTime`<sup>Required</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```go
func RdbSnapshotStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstancePersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

---


### GoogleMemorystoreInstancePscAttachmentDetailsList <a name="GoogleMemorystoreInstancePscAttachmentDetailsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstancePscAttachmentDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstancePscAttachmentDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstancePscAttachmentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstancePscAttachmentDetailsOutputReference <a name="GoogleMemorystoreInstancePscAttachmentDetailsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstancePscAttachmentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstancePscAttachmentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails">GoogleMemorystoreInstancePscAttachmentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstancePscAttachmentDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails">GoogleMemorystoreInstancePscAttachmentDetails</a>

---


### GoogleMemorystoreInstancePscAutoConnectionsList <a name="GoogleMemorystoreInstancePscAutoConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstancePscAutoConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstancePscAutoConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstancePscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstancePscAutoConnectionsOutputReference <a name="GoogleMemorystoreInstancePscAutoConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstancePscAutoConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstancePscAutoConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections">GoogleMemorystoreInstancePscAutoConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstancePscAutoConnections
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections">GoogleMemorystoreInstancePscAutoConnections</a>

---


### GoogleMemorystoreInstanceStateInfoList <a name="GoogleMemorystoreInstanceStateInfoList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceStateInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceStateInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceStateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceStateInfoOutputReference <a name="GoogleMemorystoreInstanceStateInfoOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceStateInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceStateInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.updateInfo">UpdateInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList">GoogleMemorystoreInstanceStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo">GoogleMemorystoreInstanceStateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInfo`<sup>Required</sup> <a name="UpdateInfo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.updateInfo"></a>

```go
func UpdateInfo() GoogleMemorystoreInstanceStateInfoUpdateInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList">GoogleMemorystoreInstanceStateInfoUpdateInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceStateInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo">GoogleMemorystoreInstanceStateInfo</a>

---


### GoogleMemorystoreInstanceStateInfoUpdateInfoList <a name="GoogleMemorystoreInstanceStateInfoUpdateInfoList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceStateInfoUpdateInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMemorystoreInstanceStateInfoUpdateInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.get"></a>

```go
func Get(index *f64) GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference <a name="GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion">TargetEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType">TargetNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount">TargetReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount">TargetShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo">GoogleMemorystoreInstanceStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetEngineVersion`<sup>Required</sup> <a name="TargetEngineVersion" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion"></a>

```go
func TargetEngineVersion() *string
```

- *Type:* *string

---

##### `TargetNodeType`<sup>Required</sup> <a name="TargetNodeType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType"></a>

```go
func TargetNodeType() *string
```

- *Type:* *string

---

##### `TargetReplicaCount`<sup>Required</sup> <a name="TargetReplicaCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```go
func TargetReplicaCount() *f64
```

- *Type:* *f64

---

##### `TargetShardCount`<sup>Required</sup> <a name="TargetShardCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```go
func TargetShardCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceStateInfoUpdateInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo">GoogleMemorystoreInstanceStateInfoUpdateInfo</a>

---


### GoogleMemorystoreInstanceTimeoutsOutputReference <a name="GoogleMemorystoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMemorystoreInstanceZoneDistributionConfigOutputReference <a name="GoogleMemorystoreInstanceZoneDistributionConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlememorystoreinstance"

googlememorystoreinstance.NewGoogleMemorystoreInstanceZoneDistributionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMemorystoreInstanceZoneDistributionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMemorystoreInstanceZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a>

---



