# `googleMemorystoreInstance` Submodule <a name="`googleMemorystoreInstance` Submodule" id="@cdktf/provider-google-beta.googleMemorystoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemorystoreInstance <a name="GoogleMemorystoreInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance google_memorystore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstance(scope: Construct, id: string, config: GoogleMemorystoreInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig">GoogleMemorystoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig">GoogleMemorystoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putAutomatedBackupConfig">putAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putCrossInstanceReplicationConfig">putCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredAutoCreatedEndpoints">putDesiredAutoCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredPscAutoConnections">putDesiredPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putGcsSource">putGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putManagedBackupSource">putManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putPersistenceConfig">putPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putZoneDistributionConfig">putZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetAuthorizationMode">resetAuthorizationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetAutomatedBackupConfig">resetAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetCrossInstanceReplicationConfig">resetCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDesiredAutoCreatedEndpoints">resetDesiredAutoCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDesiredPscAutoConnections">resetDesiredPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetEngineConfigs">resetEngineConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetGcsSource">resetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetManagedBackupSource">resetManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetPersistenceConfig">resetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetTransitEncryptionMode">resetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetZoneDistributionConfig">resetZoneDistributionConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomatedBackupConfig` <a name="putAutomatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putAutomatedBackupConfig"></a>

```typescript
public putAutomatedBackupConfig(value: GoogleMemorystoreInstanceAutomatedBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putAutomatedBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a>

---

##### `putCrossInstanceReplicationConfig` <a name="putCrossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putCrossInstanceReplicationConfig"></a>

```typescript
public putCrossInstanceReplicationConfig(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putCrossInstanceReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

---

##### `putDesiredAutoCreatedEndpoints` <a name="putDesiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredAutoCreatedEndpoints"></a>

```typescript
public putDesiredAutoCreatedEndpoints(value: IResolvable | GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredAutoCreatedEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a>[]

---

##### `putDesiredPscAutoConnections` <a name="putDesiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredPscAutoConnections"></a>

```typescript
public putDesiredPscAutoConnections(value: IResolvable | GoogleMemorystoreInstanceDesiredPscAutoConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putDesiredPscAutoConnections.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a>[]

---

##### `putGcsSource` <a name="putGcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putGcsSource"></a>

```typescript
public putGcsSource(value: GoogleMemorystoreInstanceGcsSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putGcsSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putMaintenancePolicy"></a>

```typescript
public putMaintenancePolicy(value: GoogleMemorystoreInstanceMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a>

---

##### `putManagedBackupSource` <a name="putManagedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putManagedBackupSource"></a>

```typescript
public putManagedBackupSource(value: GoogleMemorystoreInstanceManagedBackupSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putManagedBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a>

---

##### `putPersistenceConfig` <a name="putPersistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putPersistenceConfig"></a>

```typescript
public putPersistenceConfig(value: GoogleMemorystoreInstancePersistenceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMemorystoreInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a>

---

##### `putZoneDistributionConfig` <a name="putZoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putZoneDistributionConfig"></a>

```typescript
public putZoneDistributionConfig(value: GoogleMemorystoreInstanceZoneDistributionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.putZoneDistributionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a>

---

##### `resetAuthorizationMode` <a name="resetAuthorizationMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetAuthorizationMode"></a>

```typescript
public resetAuthorizationMode(): void
```

##### `resetAutomatedBackupConfig` <a name="resetAutomatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetAutomatedBackupConfig"></a>

```typescript
public resetAutomatedBackupConfig(): void
```

##### `resetCrossInstanceReplicationConfig` <a name="resetCrossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetCrossInstanceReplicationConfig"></a>

```typescript
public resetCrossInstanceReplicationConfig(): void
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetDesiredAutoCreatedEndpoints` <a name="resetDesiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDesiredAutoCreatedEndpoints"></a>

```typescript
public resetDesiredAutoCreatedEndpoints(): void
```

##### `resetDesiredPscAutoConnections` <a name="resetDesiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetDesiredPscAutoConnections"></a>

```typescript
public resetDesiredPscAutoConnections(): void
```

##### `resetEngineConfigs` <a name="resetEngineConfigs" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetEngineConfigs"></a>

```typescript
public resetEngineConfigs(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetGcsSource` <a name="resetGcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetGcsSource"></a>

```typescript
public resetGcsSource(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetManagedBackupSource` <a name="resetManagedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetManagedBackupSource"></a>

```typescript
public resetManagedBackupSource(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetNodeType"></a>

```typescript
public resetNodeType(): void
```

##### `resetPersistenceConfig` <a name="resetPersistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetPersistenceConfig"></a>

```typescript
public resetPersistenceConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetReplicaCount"></a>

```typescript
public resetReplicaCount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitEncryptionMode` <a name="resetTransitEncryptionMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetTransitEncryptionMode"></a>

```typescript
public resetTransitEncryptionMode(): void
```

##### `resetZoneDistributionConfig` <a name="resetZoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.resetZoneDistributionConfig"></a>

```typescript
public resetZoneDistributionConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isConstruct"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

googleMemorystoreInstance.GoogleMemorystoreInstance.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformElement"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformResource"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMemorystoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMemorystoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMemorystoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.automatedBackupConfig">automatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.backupCollection">backupCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.crossInstanceReplicationConfig">crossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference">GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredAutoCreatedEndpoints">desiredAutoCreatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList">GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredPscAutoConnections">desiredPscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList">GoogleMemorystoreInstanceDesiredPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.discoveryEndpoints">discoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList">GoogleMemorystoreInstanceDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList">GoogleMemorystoreInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.gcsSource">gcsSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference">GoogleMemorystoreInstanceGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference">GoogleMemorystoreInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList">GoogleMemorystoreInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.managedBackupSource">managedBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference">GoogleMemorystoreInstanceManagedBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList">GoogleMemorystoreInstanceNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.pscAttachmentDetails">pscAttachmentDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList">GoogleMemorystoreInstancePscAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.pscAutoConnections">pscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList">GoogleMemorystoreInstancePscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.stateInfo">stateInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList">GoogleMemorystoreInstanceStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference">GoogleMemorystoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference">GoogleMemorystoreInstanceZoneDistributionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.authorizationModeInput">authorizationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.automatedBackupConfigInput">automatedBackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.crossInstanceReplicationConfigInput">crossInstanceReplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredAutoCreatedEndpointsInput">desiredAutoCreatedEndpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredPscAutoConnectionsInput">desiredPscAutoConnectionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineConfigsInput">engineConfigsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.gcsSourceInput">gcsSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.managedBackupSourceInput">managedBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.persistenceConfigInput">persistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.replicaCountInput">replicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.shardCountInput">shardCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.transitEncryptionModeInput">transitEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.zoneDistributionConfigInput">zoneDistributionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.authorizationMode">authorizationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineConfigs">engineConfigs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.shardCount">shardCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automatedBackupConfig`<sup>Required</sup> <a name="automatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.automatedBackupConfig"></a>

```typescript
public readonly automatedBackupConfig: GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference</a>

---

##### `backupCollection`<sup>Required</sup> <a name="backupCollection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.backupCollection"></a>

```typescript
public readonly backupCollection: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `crossInstanceReplicationConfig`<sup>Required</sup> <a name="crossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.crossInstanceReplicationConfig"></a>

```typescript
public readonly crossInstanceReplicationConfig: GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference">GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference</a>

---

##### `desiredAutoCreatedEndpoints`<sup>Required</sup> <a name="desiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredAutoCreatedEndpoints"></a>

```typescript
public readonly desiredAutoCreatedEndpoints: GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList">GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList</a>

---

##### `desiredPscAutoConnections`<sup>Required</sup> <a name="desiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredPscAutoConnections"></a>

```typescript
public readonly desiredPscAutoConnections: GoogleMemorystoreInstanceDesiredPscAutoConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList">GoogleMemorystoreInstanceDesiredPscAutoConnectionsList</a>

---

##### `discoveryEndpoints`<sup>Required</sup> <a name="discoveryEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.discoveryEndpoints"></a>

```typescript
public readonly discoveryEndpoints: GoogleMemorystoreInstanceDiscoveryEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList">GoogleMemorystoreInstanceDiscoveryEndpointsList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.endpoints"></a>

```typescript
public readonly endpoints: GoogleMemorystoreInstanceEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList">GoogleMemorystoreInstanceEndpointsList</a>

---

##### `gcsSource`<sup>Required</sup> <a name="gcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.gcsSource"></a>

```typescript
public readonly gcsSource: GoogleMemorystoreInstanceGcsSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference">GoogleMemorystoreInstanceGcsSourceOutputReference</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: GoogleMemorystoreInstanceMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference">GoogleMemorystoreInstanceMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: GoogleMemorystoreInstanceMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList">GoogleMemorystoreInstanceMaintenanceScheduleList</a>

---

##### `managedBackupSource`<sup>Required</sup> <a name="managedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.managedBackupSource"></a>

```typescript
public readonly managedBackupSource: GoogleMemorystoreInstanceManagedBackupSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference">GoogleMemorystoreInstanceManagedBackupSourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GoogleMemorystoreInstanceNodeConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList">GoogleMemorystoreInstanceNodeConfigList</a>

---

##### `persistenceConfig`<sup>Required</sup> <a name="persistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.persistenceConfig"></a>

```typescript
public readonly persistenceConfig: GoogleMemorystoreInstancePersistenceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigOutputReference</a>

---

##### `pscAttachmentDetails`<sup>Required</sup> <a name="pscAttachmentDetails" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.pscAttachmentDetails"></a>

```typescript
public readonly pscAttachmentDetails: GoogleMemorystoreInstancePscAttachmentDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList">GoogleMemorystoreInstancePscAttachmentDetailsList</a>

---

##### `pscAutoConnections`<sup>Required</sup> <a name="pscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.pscAutoConnections"></a>

```typescript
public readonly pscAutoConnections: GoogleMemorystoreInstancePscAutoConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList">GoogleMemorystoreInstancePscAutoConnectionsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateInfo`<sup>Required</sup> <a name="stateInfo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.stateInfo"></a>

```typescript
public readonly stateInfo: GoogleMemorystoreInstanceStateInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList">GoogleMemorystoreInstanceStateInfoList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMemorystoreInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference">GoogleMemorystoreInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `zoneDistributionConfig`<sup>Required</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.zoneDistributionConfig"></a>

```typescript
public readonly zoneDistributionConfig: GoogleMemorystoreInstanceZoneDistributionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference">GoogleMemorystoreInstanceZoneDistributionConfigOutputReference</a>

---

##### `authorizationModeInput`<sup>Optional</sup> <a name="authorizationModeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.authorizationModeInput"></a>

```typescript
public readonly authorizationModeInput: string;
```

- *Type:* string

---

##### `automatedBackupConfigInput`<sup>Optional</sup> <a name="automatedBackupConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.automatedBackupConfigInput"></a>

```typescript
public readonly automatedBackupConfigInput: GoogleMemorystoreInstanceAutomatedBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a>

---

##### `crossInstanceReplicationConfigInput`<sup>Optional</sup> <a name="crossInstanceReplicationConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.crossInstanceReplicationConfigInput"></a>

```typescript
public readonly crossInstanceReplicationConfigInput: GoogleMemorystoreInstanceCrossInstanceReplicationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `desiredAutoCreatedEndpointsInput`<sup>Optional</sup> <a name="desiredAutoCreatedEndpointsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredAutoCreatedEndpointsInput"></a>

```typescript
public readonly desiredAutoCreatedEndpointsInput: IResolvable | GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a>[]

---

##### `desiredPscAutoConnectionsInput`<sup>Optional</sup> <a name="desiredPscAutoConnectionsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.desiredPscAutoConnectionsInput"></a>

```typescript
public readonly desiredPscAutoConnectionsInput: IResolvable | GoogleMemorystoreInstanceDesiredPscAutoConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a>[]

---

##### `engineConfigsInput`<sup>Optional</sup> <a name="engineConfigsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineConfigsInput"></a>

```typescript
public readonly engineConfigsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `gcsSourceInput`<sup>Optional</sup> <a name="gcsSourceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.gcsSourceInput"></a>

```typescript
public readonly gcsSourceInput: GoogleMemorystoreInstanceGcsSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: GoogleMemorystoreInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a>

---

##### `managedBackupSourceInput`<sup>Optional</sup> <a name="managedBackupSourceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.managedBackupSourceInput"></a>

```typescript
public readonly managedBackupSourceInput: GoogleMemorystoreInstanceManagedBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `persistenceConfigInput`<sup>Optional</sup> <a name="persistenceConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.persistenceConfigInput"></a>

```typescript
public readonly persistenceConfigInput: GoogleMemorystoreInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.replicaCountInput"></a>

```typescript
public readonly replicaCountInput: number;
```

- *Type:* number

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.shardCountInput"></a>

```typescript
public readonly shardCountInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMemorystoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a>

---

##### `transitEncryptionModeInput`<sup>Optional</sup> <a name="transitEncryptionModeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.transitEncryptionModeInput"></a>

```typescript
public readonly transitEncryptionModeInput: string;
```

- *Type:* string

---

##### `zoneDistributionConfigInput`<sup>Optional</sup> <a name="zoneDistributionConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.zoneDistributionConfigInput"></a>

```typescript
public readonly zoneDistributionConfigInput: GoogleMemorystoreInstanceZoneDistributionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a>

---

##### `authorizationMode`<sup>Required</sup> <a name="authorizationMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.authorizationMode"></a>

```typescript
public readonly authorizationMode: string;
```

- *Type:* string

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engineConfigs`<sup>Required</sup> <a name="engineConfigs" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineConfigs"></a>

```typescript
public readonly engineConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

---

##### `transitEncryptionMode`<sup>Required</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.transitEncryptionMode"></a>

```typescript
public readonly transitEncryptionMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemorystoreInstanceAutomatedBackupConfig <a name="GoogleMemorystoreInstanceAutomatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceAutomatedBackupConfig: googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.property.fixedFrequencySchedule">fixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | fixed_frequency_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.property.retention">retention</a></code> | <code>string</code> | How long to keep automated backups before the backups are deleted. |

---

##### `fixedFrequencySchedule`<sup>Required</sup> <a name="fixedFrequencySchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.property.fixedFrequencySchedule"></a>

```typescript
public readonly fixedFrequencySchedule: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

fixed_frequency_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#fixed_frequency_schedule GoogleMemorystoreInstance#fixed_frequency_schedule}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

How long to keep automated backups before the backups are deleted.

The value should be between 1 day and 365 days. If not specified, the default value is 35 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". The default_value is "3024000s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#retention GoogleMemorystoreInstance#retention}

---

### GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule <a name="GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule: googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | start_time block. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.property.startTime"></a>

```typescript
public readonly startTime: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#start_time GoogleMemorystoreInstance#start_time}

---

### GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime <a name="GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime: googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of a day in 24 hour format. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#hours GoogleMemorystoreInstance#hours}

---

### GoogleMemorystoreInstanceConfig <a name="GoogleMemorystoreInstanceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceConfig: googleMemorystoreInstance.GoogleMemorystoreInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Required. The ID to use for the instance, which will become the final component of the instance's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.shardCount">shardCount</a></code> | <code>number</code> | Required. Number of shards for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.authorizationMode">authorizationMode</a></code> | <code>string</code> | Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.automatedBackupConfig">automatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a></code> | automated_backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.crossInstanceReplicationConfig">crossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a></code> | cross_instance_replication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. If set to true deletion of the instance will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.desiredAutoCreatedEndpoints">desiredAutoCreatedEndpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a>[]</code> | desired_auto_created_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.desiredPscAutoConnections">desiredPscAutoConnections</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a>[]</code> | desired_psc_auto_connections block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.engineConfigs">engineConfigs</a></code> | <code>{[ key: string ]: string}</code> | Optional. User-provided engine configurations for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Optional. Engine version of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.gcsSource">gcsSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#id GoogleMemorystoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.managedBackupSource">managedBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a></code> | managed_backup_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.mode">mode</a></code> | <code>string</code> | Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.nodeType">nodeType</a></code> | <code>string</code> | Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#project GoogleMemorystoreInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.replicaCount">replicaCount</a></code> | <code>number</code> | Optional. Number of replica nodes per shard. If omitted the default is 0 replicas. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>string</code> | Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Required. The ID to use for the instance, which will become the final component of the instance's resource name.

This value is subject to the following restrictions:

* Must be 4-63 characters in length
* Must begin with a letter or digit
* Must contain only lowercase letters, digits, and hyphens
* Must not end with a hyphen
* Must be unique within a location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#instance_id GoogleMemorystoreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#location GoogleMemorystoreInstance#location}

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

Required. Number of shards for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#shard_count GoogleMemorystoreInstance#shard_count}

---

##### `authorizationMode`<sup>Optional</sup> <a name="authorizationMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.authorizationMode"></a>

```typescript
public readonly authorizationMode: string;
```

- *Type:* string

Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#authorization_mode GoogleMemorystoreInstance#authorization_mode}

---

##### `automatedBackupConfig`<sup>Optional</sup> <a name="automatedBackupConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.automatedBackupConfig"></a>

```typescript
public readonly automatedBackupConfig: GoogleMemorystoreInstanceAutomatedBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a>

automated_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#automated_backup_config GoogleMemorystoreInstance#automated_backup_config}

---

##### `crossInstanceReplicationConfig`<sup>Optional</sup> <a name="crossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.crossInstanceReplicationConfig"></a>

```typescript
public readonly crossInstanceReplicationConfig: GoogleMemorystoreInstanceCrossInstanceReplicationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

cross_instance_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#cross_instance_replication_config GoogleMemorystoreInstance#cross_instance_replication_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. If set to true deletion of the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#deletion_protection_enabled GoogleMemorystoreInstance#deletion_protection_enabled}

---

##### `desiredAutoCreatedEndpoints`<sup>Optional</sup> <a name="desiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.desiredAutoCreatedEndpoints"></a>

```typescript
public readonly desiredAutoCreatedEndpoints: IResolvable | GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a>[]

desired_auto_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#desired_auto_created_endpoints GoogleMemorystoreInstance#desired_auto_created_endpoints}

---

##### `desiredPscAutoConnections`<sup>Optional</sup> <a name="desiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.desiredPscAutoConnections"></a>

```typescript
public readonly desiredPscAutoConnections: IResolvable | GoogleMemorystoreInstanceDesiredPscAutoConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a>[]

desired_psc_auto_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#desired_psc_auto_connections GoogleMemorystoreInstance#desired_psc_auto_connections}

---

##### `engineConfigs`<sup>Optional</sup> <a name="engineConfigs" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.engineConfigs"></a>

```typescript
public readonly engineConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User-provided engine configurations for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#engine_configs GoogleMemorystoreInstance#engine_configs}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Optional. Engine version of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#engine_version GoogleMemorystoreInstance#engine_version}

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.gcsSource"></a>

```typescript
public readonly gcsSource: GoogleMemorystoreInstanceGcsSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#gcs_source GoogleMemorystoreInstance#gcs_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#id GoogleMemorystoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#labels GoogleMemorystoreInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: GoogleMemorystoreInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#maintenance_policy GoogleMemorystoreInstance#maintenance_policy}

---

##### `managedBackupSource`<sup>Optional</sup> <a name="managedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.managedBackupSource"></a>

```typescript
public readonly managedBackupSource: GoogleMemorystoreInstanceManagedBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a>

managed_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#managed_backup_source GoogleMemorystoreInstance#managed_backup_source}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#node_type GoogleMemorystoreInstance#node_type}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.persistenceConfig"></a>

```typescript
public readonly persistenceConfig: GoogleMemorystoreInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#persistence_config GoogleMemorystoreInstance#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#project GoogleMemorystoreInstance#project}.

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

Optional. Number of replica nodes per shard. If omitted the default is 0 replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#replica_count GoogleMemorystoreInstance#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMemorystoreInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#timeouts GoogleMemorystoreInstance#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.transitEncryptionMode"></a>

```typescript
public readonly transitEncryptionMode: string;
```

- *Type:* string

Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#transit_encryption_mode GoogleMemorystoreInstance#transit_encryption_mode}

---

##### `zoneDistributionConfig`<sup>Optional</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceConfig.property.zoneDistributionConfig"></a>

```typescript
public readonly zoneDistributionConfig: GoogleMemorystoreInstanceZoneDistributionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#zone_distribution_config GoogleMemorystoreInstance#zone_distribution_config}

---

### GoogleMemorystoreInstanceCrossInstanceReplicationConfig <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceCrossInstanceReplicationConfig: googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.instanceRole">instanceRole</a></code> | <code>string</code> | The instance role supports the following values: 1. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.primaryInstance">primaryInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | primary_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.secondaryInstances">secondaryInstances</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>[]</code> | secondary_instances block. |

---

##### `instanceRole`<sup>Optional</sup> <a name="instanceRole" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.instanceRole"></a>

```typescript
public readonly instanceRole: string;
```

- *Type:* string

The instance role supports the following values: 1.

'INSTANCE_ROLE_UNSPECIFIED': This is an independent instance that has never participated in cross instance replication. It allows both reads and writes.
2. 'NONE': This is an independent instance that previously participated in cross instance replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
3. 'PRIMARY': This instance serves as the replication source for secondary instance that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
4. 'SECONDARY': This instance replicates data from the primary instance. It allows only reads. Possible values: ["INSTANCE_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#instance_role GoogleMemorystoreInstance#instance_role}

---

##### `primaryInstance`<sup>Optional</sup> <a name="primaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.primaryInstance"></a>

```typescript
public readonly primaryInstance: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

primary_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#primary_instance GoogleMemorystoreInstance#primary_instance}

---

##### `secondaryInstances`<sup>Optional</sup> <a name="secondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig.property.secondaryInstances"></a>

```typescript
public readonly secondaryInstances: IResolvable | GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>[]

secondary_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#secondary_instances GoogleMemorystoreInstance#secondary_instances}

---

### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceCrossInstanceReplicationConfigMembership: googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership = { ... }
```


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance: googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance = { ... }
```


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance: googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance = { ... }
```


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance: googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.property.instance">instance</a></code> | <code>string</code> | The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#instance GoogleMemorystoreInstance#instance}

---

### GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances: googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.property.instance">instance</a></code> | <code>string</code> | The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#instance GoogleMemorystoreInstance#instance}

---

### GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints <a name="GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceDesiredAutoCreatedEndpoints: googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.property.network">network</a></code> | <code>string</code> | Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.property.projectId">projectId</a></code> | <code>string</code> | Required. The consumer project_id where the forwarding rule is created from. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#network GoogleMemorystoreInstance#network}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Required. The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#project_id GoogleMemorystoreInstance#project_id}

---

### GoogleMemorystoreInstanceDesiredPscAutoConnections <a name="GoogleMemorystoreInstanceDesiredPscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceDesiredPscAutoConnections: googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.property.network">network</a></code> | <code>string</code> | Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.property.projectId">projectId</a></code> | <code>string</code> | Required. The consumer project_id where the forwarding rule is created from. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#network GoogleMemorystoreInstance#network}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Required. The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#project_id GoogleMemorystoreInstance#project_id}

---

### GoogleMemorystoreInstanceDiscoveryEndpoints <a name="GoogleMemorystoreInstanceDiscoveryEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceDiscoveryEndpoints: googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints = { ... }
```


### GoogleMemorystoreInstanceEndpoints <a name="GoogleMemorystoreInstanceEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceEndpoints: googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints = { ... }
```


### GoogleMemorystoreInstanceEndpointsConnections <a name="GoogleMemorystoreInstanceEndpointsConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceEndpointsConnections: googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections = { ... }
```


### GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection <a name="GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceEndpointsConnectionsPscAutoConnection: googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection = { ... }
```


### GoogleMemorystoreInstanceGcsSource <a name="GoogleMemorystoreInstanceGcsSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceGcsSource: googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource.property.uris">uris</a></code> | <code>string[]</code> | URIs of the GCS objects to import. Example: gs://bucket1/object1, gs://bucket2/folder2/object2. |

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

URIs of the GCS objects to import. Example: gs://bucket1/object1, gs://bucket2/folder2/object2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#uris GoogleMemorystoreInstance#uris}

---

### GoogleMemorystoreInstanceMaintenancePolicy <a name="GoogleMemorystoreInstanceMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceMaintenancePolicy: googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | weekly_maintenance_window block. |

---

##### `weeklyMaintenanceWindow`<sup>Optional</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: IResolvable | GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#weekly_maintenance_window GoogleMemorystoreInstance#weekly_maintenance_window}

---

### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow: googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>string</code> | The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

The day of week that maintenance updates occur.

DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#day GoogleMemorystoreInstance#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#start_time GoogleMemorystoreInstance#start_time}

---

### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime: googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#hours GoogleMemorystoreInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#minutes GoogleMemorystoreInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#nanos GoogleMemorystoreInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#seconds GoogleMemorystoreInstance#seconds}

---

### GoogleMemorystoreInstanceMaintenanceSchedule <a name="GoogleMemorystoreInstanceMaintenanceSchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceMaintenanceSchedule: googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule = { ... }
```


### GoogleMemorystoreInstanceManagedBackupSource <a name="GoogleMemorystoreInstanceManagedBackupSource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceManagedBackupSource: googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource.property.backup">backup</a></code> | <code>string</code> | Example: 'projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}'. |

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource.property.backup"></a>

```typescript
public readonly backup: string;
```

- *Type:* string

Example: 'projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#backup GoogleMemorystoreInstance#backup}

---

### GoogleMemorystoreInstanceNodeConfig <a name="GoogleMemorystoreInstanceNodeConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceNodeConfig: googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig = { ... }
```


### GoogleMemorystoreInstancePersistenceConfig <a name="GoogleMemorystoreInstancePersistenceConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstancePersistenceConfig: googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.aofConfig">aofConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a></code> | aof_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.mode">mode</a></code> | <code>string</code> | Optional. Current persistence mode.   Possible values: DISABLED RDB AOF Possible values: ["DISABLED", "RDB", "AOF"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.rdbConfig">rdbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a></code> | rdb_config block. |

---

##### `aofConfig`<sup>Optional</sup> <a name="aofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.aofConfig"></a>

```typescript
public readonly aofConfig: GoogleMemorystoreInstancePersistenceConfigAofConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a>

aof_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#aof_config GoogleMemorystoreInstance#aof_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Optional. Current persistence mode.   Possible values: DISABLED RDB AOF Possible values: ["DISABLED", "RDB", "AOF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}

---

##### `rdbConfig`<sup>Optional</sup> <a name="rdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig.property.rdbConfig"></a>

```typescript
public readonly rdbConfig: GoogleMemorystoreInstancePersistenceConfigRdbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

rdb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#rdb_config GoogleMemorystoreInstance#rdb_config}

---

### GoogleMemorystoreInstancePersistenceConfigAofConfig <a name="GoogleMemorystoreInstancePersistenceConfigAofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstancePersistenceConfigAofConfig: googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig.property.appendFsync">appendFsync</a></code> | <code>string</code> | Optional. The fsync mode.   Possible values:  NEVER EVERY_SEC ALWAYS. |

---

##### `appendFsync`<sup>Optional</sup> <a name="appendFsync" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig.property.appendFsync"></a>

```typescript
public readonly appendFsync: string;
```

- *Type:* string

Optional. The fsync mode.   Possible values:  NEVER EVERY_SEC ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#append_fsync GoogleMemorystoreInstance#append_fsync}

---

### GoogleMemorystoreInstancePersistenceConfigRdbConfig <a name="GoogleMemorystoreInstancePersistenceConfigRdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstancePersistenceConfigRdbConfig: googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>string</code> | Optional. Period between RDB snapshots.   Possible values:  ONE_HOUR SIX_HOURS TWELVE_HOURS TWENTY_FOUR_HOURS. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>string</code> | Optional. |

---

##### `rdbSnapshotPeriod`<sup>Optional</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotPeriod"></a>

```typescript
public readonly rdbSnapshotPeriod: string;
```

- *Type:* string

Optional. Period between RDB snapshots.   Possible values:  ONE_HOUR SIX_HOURS TWELVE_HOURS TWENTY_FOUR_HOURS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#rdb_snapshot_period GoogleMemorystoreInstance#rdb_snapshot_period}

---

##### `rdbSnapshotStartTime`<sup>Optional</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotStartTime"></a>

```typescript
public readonly rdbSnapshotStartTime: string;
```

- *Type:* string

Optional.

Time that the first snapshot was/will be attempted, and to which future
snapshots will be aligned. If not provided, the current time will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#rdb_snapshot_start_time GoogleMemorystoreInstance#rdb_snapshot_start_time}

---

### GoogleMemorystoreInstancePscAttachmentDetails <a name="GoogleMemorystoreInstancePscAttachmentDetails" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstancePscAttachmentDetails: googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails = { ... }
```


### GoogleMemorystoreInstancePscAutoConnections <a name="GoogleMemorystoreInstancePscAutoConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstancePscAutoConnections: googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections = { ... }
```


### GoogleMemorystoreInstanceStateInfo <a name="GoogleMemorystoreInstanceStateInfo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceStateInfo: googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo = { ... }
```


### GoogleMemorystoreInstanceStateInfoUpdateInfo <a name="GoogleMemorystoreInstanceStateInfoUpdateInfo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceStateInfoUpdateInfo: googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo = { ... }
```


### GoogleMemorystoreInstanceTimeouts <a name="GoogleMemorystoreInstanceTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceTimeouts: googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#create GoogleMemorystoreInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#delete GoogleMemorystoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#update GoogleMemorystoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#create GoogleMemorystoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#delete GoogleMemorystoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#update GoogleMemorystoreInstance#update}.

---

### GoogleMemorystoreInstanceZoneDistributionConfig <a name="GoogleMemorystoreInstanceZoneDistributionConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceZoneDistributionConfig: googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.property.mode">mode</a></code> | <code>string</code> | Optional. Current zone distribution mode. Defaults to MULTI_ZONE.   Possible values:  MULTI_ZONE SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.property.zone">zone</a></code> | <code>string</code> | Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Optional. Current zone distribution mode. Defaults to MULTI_ZONE.   Possible values:  MULTI_ZONE SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_memorystore_instance#zone GoogleMemorystoreInstance#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference <a name="GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


### GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference <a name="GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


### GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference <a name="GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule">putFixedFrequencySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedFrequencySchedule` <a name="putFixedFrequencySchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule"></a>

```typescript
public putFixedFrequencySchedule(value: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule">fixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput">fixedFrequencyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retentionInput">retentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention">retention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedFrequencySchedule`<sup>Required</sup> <a name="fixedFrequencySchedule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule"></a>

```typescript
public readonly fixedFrequencySchedule: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a>

---

##### `fixedFrequencyScheduleInput`<sup>Optional</sup> <a name="fixedFrequencyScheduleInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput"></a>

```typescript
public readonly fixedFrequencyScheduleInput: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retentionInput"></a>

```typescript
public readonly retentionInput: string;
```

- *Type:* string

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceAutomatedBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceAutomatedBackupConfig">GoogleMemorystoreInstanceAutomatedBackupConfig</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance">primaryInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance">secondaryInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryInstance`<sup>Required</sup> <a name="primaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance"></a>

```typescript
public readonly primaryInstance: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a>

---

##### `secondaryInstance`<sup>Required</sup> <a name="secondaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance"></a>

```typescript
public readonly secondaryInstance: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance">putPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances">putSecondaryInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetInstanceRole">resetInstanceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetPrimaryInstance">resetPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetSecondaryInstances">resetSecondaryInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryInstance` <a name="putPrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance"></a>

```typescript
public putPrimaryInstance(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---

##### `putSecondaryInstances` <a name="putSecondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances"></a>

```typescript
public putSecondaryInstances(value: IResolvable | GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>[]

---

##### `resetInstanceRole` <a name="resetInstanceRole" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetInstanceRole"></a>

```typescript
public resetInstanceRole(): void
```

##### `resetPrimaryInstance` <a name="resetPrimaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetPrimaryInstance"></a>

```typescript
public resetPrimaryInstance(): void
```

##### `resetSecondaryInstances` <a name="resetSecondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetSecondaryInstances"></a>

```typescript
public resetSecondaryInstances(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership">membership</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance">primaryInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances">secondaryInstances</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRoleInput">instanceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstanceInput">primaryInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstancesInput">secondaryInstancesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole">instanceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership"></a>

```typescript
public readonly membership: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a>

---

##### `primaryInstance`<sup>Required</sup> <a name="primaryInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance"></a>

```typescript
public readonly primaryInstance: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference</a>

---

##### `secondaryInstances`<sup>Required</sup> <a name="secondaryInstances" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances"></a>

```typescript
public readonly secondaryInstances: GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `instanceRoleInput`<sup>Optional</sup> <a name="instanceRoleInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRoleInput"></a>

```typescript
public readonly instanceRoleInput: string;
```

- *Type:* string

---

##### `primaryInstanceInput`<sup>Optional</sup> <a name="primaryInstanceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstanceInput"></a>

```typescript
public readonly primaryInstanceInput: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---

##### `secondaryInstancesInput`<sup>Optional</sup> <a name="secondaryInstancesInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstancesInput"></a>

```typescript
public readonly secondaryInstancesInput: IResolvable | GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>[]

---

##### `instanceRole`<sup>Required</sup> <a name="instanceRole" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole"></a>

```typescript
public readonly instanceRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceCrossInstanceReplicationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfig">GoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resetInstance">resetInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resetInstance"></a>

```typescript
public resetInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>[]

---


### GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference <a name="GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resetInstance">resetInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resetInstance"></a>

```typescript
public resetInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>

---


### GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList <a name="GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a>[]

---


### GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference <a name="GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints">GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints</a>

---


### GoogleMemorystoreInstanceDesiredPscAutoConnectionsList <a name="GoogleMemorystoreInstanceDesiredPscAutoConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredPscAutoConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a>[]

---


### GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference <a name="GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredPscAutoConnections;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDesiredPscAutoConnections">GoogleMemorystoreInstanceDesiredPscAutoConnections</a>

---


### GoogleMemorystoreInstanceDiscoveryEndpointsList <a name="GoogleMemorystoreInstanceDiscoveryEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference <a name="GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints">GoogleMemorystoreInstanceDiscoveryEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceDiscoveryEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceDiscoveryEndpoints">GoogleMemorystoreInstanceDiscoveryEndpoints</a>

---


### GoogleMemorystoreInstanceEndpointsConnectionsList <a name="GoogleMemorystoreInstanceEndpointsConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceEndpointsConnectionsOutputReference <a name="GoogleMemorystoreInstanceEndpointsConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection">pscAutoConnection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections">GoogleMemorystoreInstanceEndpointsConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pscAutoConnection`<sup>Required</sup> <a name="pscAutoConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection"></a>

```typescript
public readonly pscAutoConnection: GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceEndpointsConnections;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnections">GoogleMemorystoreInstanceEndpointsConnections</a>

---


### GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList <a name="GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference <a name="GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection">GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection">GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection</a>

---


### GoogleMemorystoreInstanceEndpointsList <a name="GoogleMemorystoreInstanceEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceEndpointsOutputReference <a name="GoogleMemorystoreInstanceEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList">GoogleMemorystoreInstanceEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints">GoogleMemorystoreInstanceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.connections"></a>

```typescript
public readonly connections: GoogleMemorystoreInstanceEndpointsConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsConnectionsList">GoogleMemorystoreInstanceEndpointsConnectionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceEndpoints">GoogleMemorystoreInstanceEndpoints</a>

---


### GoogleMemorystoreInstanceGcsSourceOutputReference <a name="GoogleMemorystoreInstanceGcsSourceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.urisInput">urisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.uris">uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* string[]

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceGcsSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceGcsSource">GoogleMemorystoreInstanceGcsSource</a>

---


### GoogleMemorystoreInstanceMaintenancePolicyOutputReference <a name="GoogleMemorystoreInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">resetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```typescript
public putWeeklyMaintenanceWindow(value: IResolvable | GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `resetWeeklyMaintenanceWindow` <a name="resetWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```typescript
public resetWeeklyMaintenanceWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```typescript
public readonly weeklyMaintenanceWindowInput: IResolvable | GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicy">GoogleMemorystoreInstanceMaintenancePolicy</a>

---


### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---


### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### GoogleMemorystoreInstanceMaintenanceScheduleList <a name="GoogleMemorystoreInstanceMaintenanceScheduleList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceMaintenanceScheduleOutputReference <a name="GoogleMemorystoreInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule">GoogleMemorystoreInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```typescript
public readonly scheduleDeadlineTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceMaintenanceSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceMaintenanceSchedule">GoogleMemorystoreInstanceMaintenanceSchedule</a>

---


### GoogleMemorystoreInstanceManagedBackupSourceOutputReference <a name="GoogleMemorystoreInstanceManagedBackupSourceOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backupInput">backupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backup">backup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backupInput"></a>

```typescript
public readonly backupInput: string;
```

- *Type:* string

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backup"></a>

```typescript
public readonly backup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceManagedBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceManagedBackupSource">GoogleMemorystoreInstanceManagedBackupSource</a>

---


### GoogleMemorystoreInstanceNodeConfigList <a name="GoogleMemorystoreInstanceNodeConfigList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceNodeConfigOutputReference <a name="GoogleMemorystoreInstanceNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig">GoogleMemorystoreInstanceNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceNodeConfig">GoogleMemorystoreInstanceNodeConfig</a>

---


### GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference <a name="GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resetAppendFsync">resetAppendFsync</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppendFsync` <a name="resetAppendFsync" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resetAppendFsync"></a>

```typescript
public resetAppendFsync(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsyncInput">appendFsyncInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync">appendFsync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appendFsyncInput`<sup>Optional</sup> <a name="appendFsyncInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsyncInput"></a>

```typescript
public readonly appendFsyncInput: string;
```

- *Type:* string

---

##### `appendFsync`<sup>Required</sup> <a name="appendFsync" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```typescript
public readonly appendFsync: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstancePersistenceConfigAofConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a>

---


### GoogleMemorystoreInstancePersistenceConfigOutputReference <a name="GoogleMemorystoreInstancePersistenceConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putAofConfig">putAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putRdbConfig">putRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetAofConfig">resetAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetRdbConfig">resetRdbConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAofConfig` <a name="putAofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putAofConfig"></a>

```typescript
public putAofConfig(value: GoogleMemorystoreInstancePersistenceConfigAofConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putAofConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a>

---

##### `putRdbConfig` <a name="putRdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putRdbConfig"></a>

```typescript
public putRdbConfig(value: GoogleMemorystoreInstancePersistenceConfigRdbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.putRdbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

---

##### `resetAofConfig` <a name="resetAofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetAofConfig"></a>

```typescript
public resetAofConfig(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetRdbConfig` <a name="resetRdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.resetRdbConfig"></a>

```typescript
public resetRdbConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfig">aofConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig">rdbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfigInput">aofConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfigInput">rdbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aofConfig`<sup>Required</sup> <a name="aofConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfig"></a>

```typescript
public readonly aofConfig: GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference</a>

---

##### `rdbConfig`<sup>Required</sup> <a name="rdbConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig"></a>

```typescript
public readonly rdbConfig: GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference">GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference</a>

---

##### `aofConfigInput`<sup>Optional</sup> <a name="aofConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfigInput"></a>

```typescript
public readonly aofConfigInput: GoogleMemorystoreInstancePersistenceConfigAofConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigAofConfig">GoogleMemorystoreInstancePersistenceConfigAofConfig</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `rdbConfigInput`<sup>Optional</sup> <a name="rdbConfigInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfigInput"></a>

```typescript
public readonly rdbConfigInput: GoogleMemorystoreInstancePersistenceConfigRdbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfig">GoogleMemorystoreInstancePersistenceConfig</a>

---


### GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference <a name="GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod">resetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime">resetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRdbSnapshotPeriod` <a name="resetRdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod"></a>

```typescript
public resetRdbSnapshotPeriod(): void
```

##### `resetRdbSnapshotStartTime` <a name="resetRdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime"></a>

```typescript
public resetRdbSnapshotStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput">rdbSnapshotPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput">rdbSnapshotStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rdbSnapshotPeriodInput`<sup>Optional</sup> <a name="rdbSnapshotPeriodInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```typescript
public readonly rdbSnapshotPeriodInput: string;
```

- *Type:* string

---

##### `rdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="rdbSnapshotStartTimeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```typescript
public readonly rdbSnapshotStartTimeInput: string;
```

- *Type:* string

---

##### `rdbSnapshotPeriod`<sup>Required</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```typescript
public readonly rdbSnapshotPeriod: string;
```

- *Type:* string

---

##### `rdbSnapshotStartTime`<sup>Required</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```typescript
public readonly rdbSnapshotStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstancePersistenceConfigRdbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePersistenceConfigRdbConfig">GoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

---


### GoogleMemorystoreInstancePscAttachmentDetailsList <a name="GoogleMemorystoreInstancePscAttachmentDetailsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstancePscAttachmentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstancePscAttachmentDetailsOutputReference <a name="GoogleMemorystoreInstancePscAttachmentDetailsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails">GoogleMemorystoreInstancePscAttachmentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstancePscAttachmentDetails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAttachmentDetails">GoogleMemorystoreInstancePscAttachmentDetails</a>

---


### GoogleMemorystoreInstancePscAutoConnectionsList <a name="GoogleMemorystoreInstancePscAutoConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstancePscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstancePscAutoConnectionsOutputReference <a name="GoogleMemorystoreInstancePscAutoConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections">GoogleMemorystoreInstancePscAutoConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus"></a>

```typescript
public readonly pscConnectionStatus: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstancePscAutoConnections;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstancePscAutoConnections">GoogleMemorystoreInstancePscAutoConnections</a>

---


### GoogleMemorystoreInstanceStateInfoList <a name="GoogleMemorystoreInstanceStateInfoList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceStateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceStateInfoOutputReference <a name="GoogleMemorystoreInstanceStateInfoOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.updateInfo">updateInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList">GoogleMemorystoreInstanceStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo">GoogleMemorystoreInstanceStateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `updateInfo`<sup>Required</sup> <a name="updateInfo" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.updateInfo"></a>

```typescript
public readonly updateInfo: GoogleMemorystoreInstanceStateInfoUpdateInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList">GoogleMemorystoreInstanceStateInfoUpdateInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceStateInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfo">GoogleMemorystoreInstanceStateInfo</a>

---


### GoogleMemorystoreInstanceStateInfoUpdateInfoList <a name="GoogleMemorystoreInstanceStateInfoUpdateInfoList" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference <a name="GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion">targetEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType">targetNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount">targetReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount">targetShardCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo">GoogleMemorystoreInstanceStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetEngineVersion`<sup>Required</sup> <a name="targetEngineVersion" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion"></a>

```typescript
public readonly targetEngineVersion: string;
```

- *Type:* string

---

##### `targetNodeType`<sup>Required</sup> <a name="targetNodeType" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType"></a>

```typescript
public readonly targetNodeType: string;
```

- *Type:* string

---

##### `targetReplicaCount`<sup>Required</sup> <a name="targetReplicaCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```typescript
public readonly targetReplicaCount: number;
```

- *Type:* number

---

##### `targetShardCount`<sup>Required</sup> <a name="targetShardCount" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```typescript
public readonly targetShardCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceStateInfoUpdateInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceStateInfoUpdateInfo">GoogleMemorystoreInstanceStateInfoUpdateInfo</a>

---


### GoogleMemorystoreInstanceTimeoutsOutputReference <a name="GoogleMemorystoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceTimeouts">GoogleMemorystoreInstanceTimeouts</a>

---


### GoogleMemorystoreInstanceZoneDistributionConfigOutputReference <a name="GoogleMemorystoreInstanceZoneDistributionConfigOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstance } from '@cdktf/provider-google-beta'

new googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceZoneDistributionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstance.GoogleMemorystoreInstanceZoneDistributionConfig">GoogleMemorystoreInstanceZoneDistributionConfig</a>

---



