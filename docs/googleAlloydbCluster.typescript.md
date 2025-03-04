# `googleAlloydbCluster` Submodule <a name="`googleAlloydbCluster` Submodule" id="@cdktf/provider-google-beta.googleAlloydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAlloydbCluster <a name="GoogleAlloydbCluster" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster google_alloydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbCluster(scope: Construct, id: string, config: GoogleAlloydbClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig">GoogleAlloydbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig">GoogleAlloydbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy">putAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig">putContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser">putInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putMaintenanceUpdatePolicy">putMaintenanceUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putPscConfig">putPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource">putRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource">putRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putSecondaryConfig">putSecondaryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAutomatedBackupPolicy">resetAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetContinuousBackupConfig">resetContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDatabaseVersion">resetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetInitialUser">resetInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetMaintenanceUpdatePolicy">resetMaintenanceUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetPscConfig">resetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupSource">resetRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreContinuousBackupSource">resetRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSecondaryConfig">resetSecondaryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSkipAwaitMajorVersionUpgrade">resetSkipAwaitMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSubscriptionType">resetSubscriptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomatedBackupPolicy` <a name="putAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy"></a>

```typescript
public putAutomatedBackupPolicy(value: GoogleAlloydbClusterAutomatedBackupPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---

##### `putContinuousBackupConfig` <a name="putContinuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig"></a>

```typescript
public putContinuousBackupConfig(value: GoogleAlloydbClusterContinuousBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: GoogleAlloydbClusterEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---

##### `putInitialUser` <a name="putInitialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser"></a>

```typescript
public putInitialUser(value: GoogleAlloydbClusterInitialUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---

##### `putMaintenanceUpdatePolicy` <a name="putMaintenanceUpdatePolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putMaintenanceUpdatePolicy"></a>

```typescript
public putMaintenanceUpdatePolicy(value: GoogleAlloydbClusterMaintenanceUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putMaintenanceUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleAlloydbClusterNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a>

---

##### `putPscConfig` <a name="putPscConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putPscConfig"></a>

```typescript
public putPscConfig(value: GoogleAlloydbClusterPscConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a>

---

##### `putRestoreBackupSource` <a name="putRestoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource"></a>

```typescript
public putRestoreBackupSource(value: GoogleAlloydbClusterRestoreBackupSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---

##### `putRestoreContinuousBackupSource` <a name="putRestoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource"></a>

```typescript
public putRestoreContinuousBackupSource(value: GoogleAlloydbClusterRestoreContinuousBackupSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---

##### `putSecondaryConfig` <a name="putSecondaryConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putSecondaryConfig"></a>

```typescript
public putSecondaryConfig(value: GoogleAlloydbClusterSecondaryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putSecondaryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAlloydbClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAutomatedBackupPolicy` <a name="resetAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAutomatedBackupPolicy"></a>

```typescript
public resetAutomatedBackupPolicy(): void
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetClusterType"></a>

```typescript
public resetClusterType(): void
```

##### `resetContinuousBackupConfig` <a name="resetContinuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetContinuousBackupConfig"></a>

```typescript
public resetContinuousBackupConfig(): void
```

##### `resetDatabaseVersion` <a name="resetDatabaseVersion" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDatabaseVersion"></a>

```typescript
public resetDatabaseVersion(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialUser` <a name="resetInitialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetInitialUser"></a>

```typescript
public resetInitialUser(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenanceUpdatePolicy` <a name="resetMaintenanceUpdatePolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetMaintenanceUpdatePolicy"></a>

```typescript
public resetMaintenanceUpdatePolicy(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPscConfig` <a name="resetPscConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetPscConfig"></a>

```typescript
public resetPscConfig(): void
```

##### `resetRestoreBackupSource` <a name="resetRestoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupSource"></a>

```typescript
public resetRestoreBackupSource(): void
```

##### `resetRestoreContinuousBackupSource` <a name="resetRestoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreContinuousBackupSource"></a>

```typescript
public resetRestoreContinuousBackupSource(): void
```

##### `resetSecondaryConfig` <a name="resetSecondaryConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSecondaryConfig"></a>

```typescript
public resetSecondaryConfig(): void
```

##### `resetSkipAwaitMajorVersionUpgrade` <a name="resetSkipAwaitMajorVersionUpgrade" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSkipAwaitMajorVersionUpgrade"></a>

```typescript
public resetSkipAwaitMajorVersionUpgrade(): void
```

##### `resetSubscriptionType` <a name="resetSubscriptionType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSubscriptionType"></a>

```typescript
public resetSubscriptionType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAlloydbCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

googleAlloydbCluster.GoogleAlloydbCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAlloydbCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAlloydbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAlloydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAlloydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicy">automatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.backupSource">backupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList">GoogleAlloydbClusterBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfig">continuousBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupInfo">continuousBackupInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList">GoogleAlloydbClusterContinuousBackupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference">GoogleAlloydbClusterEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionInfo">encryptionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList">GoogleAlloydbClusterEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUser">initialUser</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference">GoogleAlloydbClusterInitialUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.maintenanceUpdatePolicy">maintenanceUpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference">GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.migrationSource">migrationSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList">GoogleAlloydbClusterMigrationSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference">GoogleAlloydbClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference">GoogleAlloydbClusterPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSource">restoreBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference">GoogleAlloydbClusterRestoreBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSource">restoreContinuousBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference">GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.secondaryConfig">secondaryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference">GoogleAlloydbClusterSecondaryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference">GoogleAlloydbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.trialMetadata">trialMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList">GoogleAlloydbClusterTrialMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicyInput">automatedBackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfigInput">continuousBackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersionInput">databaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUserInput">initialUserInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.maintenanceUpdatePolicyInput">maintenanceUpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.pscConfigInput">pscConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSourceInput">restoreBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSourceInput">restoreContinuousBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.secondaryConfigInput">secondaryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.skipAwaitMajorVersionUpgradeInput">skipAwaitMajorVersionUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.subscriptionTypeInput">subscriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.skipAwaitMajorVersionUpgrade">skipAwaitMajorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automatedBackupPolicy`<sup>Required</sup> <a name="automatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicy"></a>

```typescript
public readonly automatedBackupPolicy: GoogleAlloydbClusterAutomatedBackupPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyOutputReference</a>

---

##### `backupSource`<sup>Required</sup> <a name="backupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.backupSource"></a>

```typescript
public readonly backupSource: GoogleAlloydbClusterBackupSourceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList">GoogleAlloydbClusterBackupSourceList</a>

---

##### `continuousBackupConfig`<sup>Required</sup> <a name="continuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfig"></a>

```typescript
public readonly continuousBackupConfig: GoogleAlloydbClusterContinuousBackupConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigOutputReference</a>

---

##### `continuousBackupInfo`<sup>Required</sup> <a name="continuousBackupInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupInfo"></a>

```typescript
public readonly continuousBackupInfo: GoogleAlloydbClusterContinuousBackupInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList">GoogleAlloydbClusterContinuousBackupInfoList</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleAlloydbClusterEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference">GoogleAlloydbClusterEncryptionConfigOutputReference</a>

---

##### `encryptionInfo`<sup>Required</sup> <a name="encryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionInfo"></a>

```typescript
public readonly encryptionInfo: GoogleAlloydbClusterEncryptionInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList">GoogleAlloydbClusterEncryptionInfoList</a>

---

##### `initialUser`<sup>Required</sup> <a name="initialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUser"></a>

```typescript
public readonly initialUser: GoogleAlloydbClusterInitialUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference">GoogleAlloydbClusterInitialUserOutputReference</a>

---

##### `maintenanceUpdatePolicy`<sup>Required</sup> <a name="maintenanceUpdatePolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.maintenanceUpdatePolicy"></a>

```typescript
public readonly maintenanceUpdatePolicy: GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference">GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference</a>

---

##### `migrationSource`<sup>Required</sup> <a name="migrationSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.migrationSource"></a>

```typescript
public readonly migrationSource: GoogleAlloydbClusterMigrationSourceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList">GoogleAlloydbClusterMigrationSourceList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleAlloydbClusterNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference">GoogleAlloydbClusterNetworkConfigOutputReference</a>

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.pscConfig"></a>

```typescript
public readonly pscConfig: GoogleAlloydbClusterPscConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference">GoogleAlloydbClusterPscConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `restoreBackupSource`<sup>Required</sup> <a name="restoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSource"></a>

```typescript
public readonly restoreBackupSource: GoogleAlloydbClusterRestoreBackupSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference">GoogleAlloydbClusterRestoreBackupSourceOutputReference</a>

---

##### `restoreContinuousBackupSource`<sup>Required</sup> <a name="restoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSource"></a>

```typescript
public readonly restoreContinuousBackupSource: GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference">GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference</a>

---

##### `secondaryConfig`<sup>Required</sup> <a name="secondaryConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.secondaryConfig"></a>

```typescript
public readonly secondaryConfig: GoogleAlloydbClusterSecondaryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference">GoogleAlloydbClusterSecondaryConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAlloydbClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference">GoogleAlloydbClusterTimeoutsOutputReference</a>

---

##### `trialMetadata`<sup>Required</sup> <a name="trialMetadata" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.trialMetadata"></a>

```typescript
public readonly trialMetadata: GoogleAlloydbClusterTrialMetadataList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList">GoogleAlloydbClusterTrialMetadataList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `automatedBackupPolicyInput`<sup>Optional</sup> <a name="automatedBackupPolicyInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicyInput"></a>

```typescript
public readonly automatedBackupPolicyInput: GoogleAlloydbClusterAutomatedBackupPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `continuousBackupConfigInput`<sup>Optional</sup> <a name="continuousBackupConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfigInput"></a>

```typescript
public readonly continuousBackupConfigInput: GoogleAlloydbClusterContinuousBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersionInput"></a>

```typescript
public readonly databaseVersionInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: GoogleAlloydbClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialUserInput`<sup>Optional</sup> <a name="initialUserInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUserInput"></a>

```typescript
public readonly initialUserInput: GoogleAlloydbClusterInitialUser;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceUpdatePolicyInput`<sup>Optional</sup> <a name="maintenanceUpdatePolicyInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.maintenanceUpdatePolicyInput"></a>

```typescript
public readonly maintenanceUpdatePolicyInput: GoogleAlloydbClusterMaintenanceUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleAlloydbClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pscConfigInput`<sup>Optional</sup> <a name="pscConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.pscConfigInput"></a>

```typescript
public readonly pscConfigInput: GoogleAlloydbClusterPscConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a>

---

##### `restoreBackupSourceInput`<sup>Optional</sup> <a name="restoreBackupSourceInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSourceInput"></a>

```typescript
public readonly restoreBackupSourceInput: GoogleAlloydbClusterRestoreBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---

##### `restoreContinuousBackupSourceInput`<sup>Optional</sup> <a name="restoreContinuousBackupSourceInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSourceInput"></a>

```typescript
public readonly restoreContinuousBackupSourceInput: GoogleAlloydbClusterRestoreContinuousBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---

##### `secondaryConfigInput`<sup>Optional</sup> <a name="secondaryConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.secondaryConfigInput"></a>

```typescript
public readonly secondaryConfigInput: GoogleAlloydbClusterSecondaryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a>

---

##### `skipAwaitMajorVersionUpgradeInput`<sup>Optional</sup> <a name="skipAwaitMajorVersionUpgradeInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.skipAwaitMajorVersionUpgradeInput"></a>

```typescript
public readonly skipAwaitMajorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subscriptionTypeInput`<sup>Optional</sup> <a name="subscriptionTypeInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.subscriptionTypeInput"></a>

```typescript
public readonly subscriptionTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAlloydbClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `skipAwaitMajorVersionUpgrade`<sup>Required</sup> <a name="skipAwaitMajorVersionUpgrade" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.skipAwaitMajorVersionUpgrade"></a>

```typescript
public readonly skipAwaitMajorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAlloydbClusterAutomatedBackupPolicy <a name="GoogleAlloydbClusterAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterAutomatedBackupPolicy: googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.backupWindow">backupWindow</a></code> | <code>string</code> | The length of the time window during which a backup can be taken. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether automated backups are enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to backups created using this configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.location">location</a></code> | <code>string</code> | The location where the backup will be stored. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.quantityBasedRetention">quantityBasedRetention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | quantity_based_retention block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.timeBasedRetention">timeBasedRetention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | time_based_retention block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `backupWindow`<sup>Optional</sup> <a name="backupWindow" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.backupWindow"></a>

```typescript
public readonly backupWindow: string;
```

- *Type:* string

The length of the time window during which a backup can be taken.

If a backup does not succeed within this time window, it will be canceled and considered failed.

The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#backup_window GoogleAlloydbCluster#backup_window}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to backups created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#labels GoogleAlloydbCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the backup will be stored.

Currently, the only supported option is to store the backup in the same region as the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#location GoogleAlloydbCluster#location}

---

##### `quantityBasedRetention`<sup>Optional</sup> <a name="quantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.quantityBasedRetention"></a>

```typescript
public readonly quantityBasedRetention: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

quantity_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#quantity_based_retention GoogleAlloydbCluster#quantity_based_retention}

---

##### `timeBasedRetention`<sup>Optional</sup> <a name="timeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.timeBasedRetention"></a>

```typescript
public readonly timeBasedRetention: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

time_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#time_based_retention GoogleAlloydbCluster#time_based_retention}

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#weekly_schedule GoogleAlloydbCluster#weekly_schedule}

---

### GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig <a name="GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterAutomatedBackupPolicyEncryptionConfig: googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The fully-qualified resource name of the KMS key. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention <a name="GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention: googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.property.count">count</a></code> | <code>number</code> | The number of backups to retain. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#count GoogleAlloydbCluster#count}

---

### GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention <a name="GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention: googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#retention_period GoogleAlloydbCluster#retention_period}

---

### GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterAutomatedBackupPolicyWeeklySchedule: googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.startTimes">startTimes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>[]</code> | start_times block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | The days of the week to perform a backup. |

---

##### `startTimes`<sup>Required</sup> <a name="startTimes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.startTimes"></a>

```typescript
public readonly startTimes: IResolvable | GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>[]

start_times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#start_times GoogleAlloydbCluster#start_times}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

The days of the week to perform a backup.

At least one day of the week must be provided. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#days_of_week GoogleAlloydbCluster#days_of_week}

---

### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes: googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Currently, only the value 0 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Currently, only the value 0 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. Currently, only the value 0 is supported. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format.

Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#hours GoogleAlloydbCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#minutes GoogleAlloydbCluster#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#nanos GoogleAlloydbCluster#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#seconds GoogleAlloydbCluster#seconds}

---

### GoogleAlloydbClusterBackupSource <a name="GoogleAlloydbClusterBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterBackupSource: googleAlloydbCluster.GoogleAlloydbClusterBackupSource = { ... }
```


### GoogleAlloydbClusterConfig <a name="GoogleAlloydbClusterConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterConfig: googleAlloydbCluster.GoogleAlloydbClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The ID of the alloydb cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.location">location</a></code> | <code>string</code> | The location where the alloydb cluster should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations to allow client tools to store small amount of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.automatedBackupPolicy">automatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterType">clusterType</a></code> | <code>string</code> | The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.continuousBackupConfig">continuousBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | continuous_backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | The database engine major version. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | User-settable and human-readable display name for the Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.etag">etag</a></code> | <code>string</code> | For Resource freshness validation (https://google.aip.dev/154). |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#id GoogleAlloydbCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.initialUser">initialUser</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | initial_user block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the alloydb cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.maintenanceUpdatePolicy">maintenanceUpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a></code> | maintenance_update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#project GoogleAlloydbCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupSource">restoreBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | restore_backup_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreContinuousBackupSource">restoreContinuousBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | restore_continuous_backup_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.secondaryConfig">secondaryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a></code> | secondary_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.skipAwaitMajorVersionUpgrade">skipAwaitMajorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to skip awaiting on the major version upgrade of the cluster. Possible values: true, false Default value: "true". |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | The subscrition type of cluster. Possible values: ["TRIAL", "STANDARD"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID of the alloydb cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#cluster_id GoogleAlloydbCluster#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the alloydb cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#location GoogleAlloydbCluster#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations to allow client tools to store small amount of arbitrary data.

This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#annotations GoogleAlloydbCluster#annotations}

---

##### `automatedBackupPolicy`<sup>Optional</sup> <a name="automatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.automatedBackupPolicy"></a>

```typescript
public readonly automatedBackupPolicy: GoogleAlloydbClusterAutomatedBackupPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#automated_backup_policy GoogleAlloydbCluster#automated_backup_policy}

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#cluster_type GoogleAlloydbCluster#cluster_type}

---

##### `continuousBackupConfig`<sup>Optional</sup> <a name="continuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.continuousBackupConfig"></a>

```typescript
public readonly continuousBackupConfig: GoogleAlloydbClusterContinuousBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

continuous_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#continuous_backup_config GoogleAlloydbCluster#continuous_backup_config}

---

##### `databaseVersion`<sup>Optional</sup> <a name="databaseVersion" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

The database engine major version.

This is an optional field and it's populated at the Cluster creation time.
Note: Changing this field to a higer version results in upgrading the AlloyDB cluster which is an irreversible change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#database_version GoogleAlloydbCluster#database_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Policy to determine if the cluster should be deleted forcefully.

Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.
Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#deletion_policy GoogleAlloydbCluster#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-settable and human-readable display name for the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#display_name GoogleAlloydbCluster#display_name}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleAlloydbClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

For Resource freshness validation (https://google.aip.dev/154).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#etag GoogleAlloydbCluster#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#id GoogleAlloydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialUser`<sup>Optional</sup> <a name="initialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.initialUser"></a>

```typescript
public readonly initialUser: GoogleAlloydbClusterInitialUser;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#initial_user GoogleAlloydbCluster#initial_user}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the alloydb cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#labels GoogleAlloydbCluster#labels}

---

##### `maintenanceUpdatePolicy`<sup>Optional</sup> <a name="maintenanceUpdatePolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.maintenanceUpdatePolicy"></a>

```typescript
public readonly maintenanceUpdatePolicy: GoogleAlloydbClusterMaintenanceUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a>

maintenance_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#maintenance_update_policy GoogleAlloydbCluster#maintenance_update_policy}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleAlloydbClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#network_config GoogleAlloydbCluster#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#project GoogleAlloydbCluster#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.pscConfig"></a>

```typescript
public readonly pscConfig: GoogleAlloydbClusterPscConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#psc_config GoogleAlloydbCluster#psc_config}

---

##### `restoreBackupSource`<sup>Optional</sup> <a name="restoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupSource"></a>

```typescript
public readonly restoreBackupSource: GoogleAlloydbClusterRestoreBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

restore_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#restore_backup_source GoogleAlloydbCluster#restore_backup_source}

---

##### `restoreContinuousBackupSource`<sup>Optional</sup> <a name="restoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreContinuousBackupSource"></a>

```typescript
public readonly restoreContinuousBackupSource: GoogleAlloydbClusterRestoreContinuousBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

restore_continuous_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#restore_continuous_backup_source GoogleAlloydbCluster#restore_continuous_backup_source}

---

##### `secondaryConfig`<sup>Optional</sup> <a name="secondaryConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.secondaryConfig"></a>

```typescript
public readonly secondaryConfig: GoogleAlloydbClusterSecondaryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a>

secondary_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#secondary_config GoogleAlloydbCluster#secondary_config}

---

##### `skipAwaitMajorVersionUpgrade`<sup>Optional</sup> <a name="skipAwaitMajorVersionUpgrade" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.skipAwaitMajorVersionUpgrade"></a>

```typescript
public readonly skipAwaitMajorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to skip awaiting on the major version upgrade of the cluster. Possible values: true, false Default value: "true".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#skip_await_major_version_upgrade GoogleAlloydbCluster#skip_await_major_version_upgrade}

---

##### `subscriptionType`<sup>Optional</sup> <a name="subscriptionType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

The subscrition type of cluster. Possible values: ["TRIAL", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#subscription_type GoogleAlloydbCluster#subscription_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAlloydbClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#timeouts GoogleAlloydbCluster#timeouts}

---

### GoogleAlloydbClusterContinuousBackupConfig <a name="GoogleAlloydbClusterContinuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterContinuousBackupConfig: googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether continuous backup recovery is enabled. If not set, defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.recoveryWindowDays">recoveryWindowDays</a></code> | <code>number</code> | The numbers of days that are eligible to restore from using PITR. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether continuous backup recovery is enabled. If not set, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `recoveryWindowDays`<sup>Optional</sup> <a name="recoveryWindowDays" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.recoveryWindowDays"></a>

```typescript
public readonly recoveryWindowDays: number;
```

- *Type:* number

The numbers of days that are eligible to restore from using PITR.

To support the entire recovery window, backups and logs are retained for one day more than the recovery window.

If not set, defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#recovery_window_days GoogleAlloydbCluster#recovery_window_days}

---

### GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig <a name="GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterContinuousBackupConfigEncryptionConfig: googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The fully-qualified resource name of the KMS key. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterContinuousBackupInfo <a name="GoogleAlloydbClusterContinuousBackupInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterContinuousBackupInfo: googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo = { ... }
```


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterContinuousBackupInfoEncryptionInfo: googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo = { ... }
```


### GoogleAlloydbClusterEncryptionConfig <a name="GoogleAlloydbClusterEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterEncryptionConfig: googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The fully-qualified resource name of the KMS key. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterEncryptionInfo <a name="GoogleAlloydbClusterEncryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterEncryptionInfo: googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo = { ... }
```


### GoogleAlloydbClusterInitialUser <a name="GoogleAlloydbClusterInitialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterInitialUser: googleAlloydbCluster.GoogleAlloydbClusterInitialUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.password">password</a></code> | <code>string</code> | The initial password for the user. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.user">user</a></code> | <code>string</code> | The database username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#password GoogleAlloydbCluster#password}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#user GoogleAlloydbCluster#user}

---

### GoogleAlloydbClusterMaintenanceUpdatePolicy <a name="GoogleAlloydbClusterMaintenanceUpdatePolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterMaintenanceUpdatePolicy: googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy.property.maintenanceWindows">maintenanceWindows</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>[]</code> | maintenance_windows block. |

---

##### `maintenanceWindows`<sup>Optional</sup> <a name="maintenanceWindows" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy.property.maintenanceWindows"></a>

```typescript
public readonly maintenanceWindows: IResolvable | GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>[]

maintenance_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#maintenance_windows GoogleAlloydbCluster#maintenance_windows}

---

### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows: googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.property.day">day</a></code> | <code>string</code> | Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#day GoogleAlloydbCluster#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.property.startTime"></a>

```typescript
public readonly startTime: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#start_time GoogleAlloydbCluster#start_time}

---

### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime: googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Currently, only the value 0 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Currently, only the value 0 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. Currently, only the value 0 is supported. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#hours GoogleAlloydbCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#minutes GoogleAlloydbCluster#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#nanos GoogleAlloydbCluster#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#seconds GoogleAlloydbCluster#seconds}

---

### GoogleAlloydbClusterMigrationSource <a name="GoogleAlloydbClusterMigrationSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterMigrationSource: googleAlloydbCluster.GoogleAlloydbClusterMigrationSource = { ... }
```


### GoogleAlloydbClusterNetworkConfig <a name="GoogleAlloydbClusterNetworkConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterNetworkConfig: googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.property.allocatedIpRange">allocatedIpRange</a></code> | <code>string</code> | The name of the allocated IP range for the private IP AlloyDB cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.property.network">network</a></code> | <code>string</code> | The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. |

---

##### `allocatedIpRange`<sup>Optional</sup> <a name="allocatedIpRange" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.property.allocatedIpRange"></a>

```typescript
public readonly allocatedIpRange: string;
```

- *Type:* string

The name of the allocated IP range for the private IP AlloyDB cluster.

For example: "google-managed-services-default".
If set, the instance IPs for this cluster will be created in the allocated range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#allocated_ip_range GoogleAlloydbCluster#allocated_ip_range}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP.

The network must belong to the same project as the cluster.
It is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#network GoogleAlloydbCluster#network}

---

### GoogleAlloydbClusterPscConfig <a name="GoogleAlloydbClusterPscConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterPscConfig: googleAlloydbCluster.GoogleAlloydbClusterPscConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig.property.pscEnabled">pscEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Create an instance that allows connections from Private Service Connect endpoints to the instance. |

---

##### `pscEnabled`<sup>Optional</sup> <a name="pscEnabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig.property.pscEnabled"></a>

```typescript
public readonly pscEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Create an instance that allows connections from Private Service Connect endpoints to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#psc_enabled GoogleAlloydbCluster#psc_enabled}

---

### GoogleAlloydbClusterRestoreBackupSource <a name="GoogleAlloydbClusterRestoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterRestoreBackupSource: googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.property.backupName">backupName</a></code> | <code>string</code> | The name of the backup that this cluster is restored from. |

---

##### `backupName`<sup>Required</sup> <a name="backupName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.property.backupName"></a>

```typescript
public readonly backupName: string;
```

- *Type:* string

The name of the backup that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#backup_name GoogleAlloydbCluster#backup_name}

---

### GoogleAlloydbClusterRestoreContinuousBackupSource <a name="GoogleAlloydbClusterRestoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterRestoreContinuousBackupSource: googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.cluster">cluster</a></code> | <code>string</code> | The name of the source cluster that this cluster is restored from. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.pointInTime">pointInTime</a></code> | <code>string</code> | The point in time that this cluster is restored to, in RFC 3339 format. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The name of the source cluster that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#cluster GoogleAlloydbCluster#cluster}

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.pointInTime"></a>

```typescript
public readonly pointInTime: string;
```

- *Type:* string

The point in time that this cluster is restored to, in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#point_in_time GoogleAlloydbCluster#point_in_time}

---

### GoogleAlloydbClusterSecondaryConfig <a name="GoogleAlloydbClusterSecondaryConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterSecondaryConfig: googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig.property.primaryClusterName">primaryClusterName</a></code> | <code>string</code> | Name of the primary cluster must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |

---

##### `primaryClusterName`<sup>Required</sup> <a name="primaryClusterName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig.property.primaryClusterName"></a>

```typescript
public readonly primaryClusterName: string;
```

- *Type:* string

Name of the primary cluster must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#primary_cluster_name GoogleAlloydbCluster#primary_cluster_name}

---

### GoogleAlloydbClusterTimeouts <a name="GoogleAlloydbClusterTimeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterTimeouts: googleAlloydbCluster.GoogleAlloydbClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#create GoogleAlloydbCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#delete GoogleAlloydbCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#update GoogleAlloydbCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#create GoogleAlloydbCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#delete GoogleAlloydbCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_alloydb_cluster#update GoogleAlloydbCluster#update}.

---

### GoogleAlloydbClusterTrialMetadata <a name="GoogleAlloydbClusterTrialMetadata" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

const googleAlloydbClusterTrialMetadata: googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention">putQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention">putTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetBackupWindow">resetBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetQuantityBasedRetention">resetQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetTimeBasedRetention">resetTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---

##### `putQuantityBasedRetention` <a name="putQuantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention"></a>

```typescript
public putQuantityBasedRetention(value: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---

##### `putTimeBasedRetention` <a name="putTimeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention"></a>

```typescript
public putTimeBasedRetention(value: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule"></a>

```typescript
public putWeeklySchedule(value: GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---

##### `resetBackupWindow` <a name="resetBackupWindow" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetBackupWindow"></a>

```typescript
public resetBackupWindow(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetQuantityBasedRetention` <a name="resetQuantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetQuantityBasedRetention"></a>

```typescript
public resetQuantityBasedRetention(): void
```

##### `resetTimeBasedRetention` <a name="resetTimeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetTimeBasedRetention"></a>

```typescript
public resetTimeBasedRetention(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention">quantityBasedRetention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention">timeBasedRetention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindowInput">backupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetentionInput">quantityBasedRetentionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetentionInput">timeBasedRetentionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow">backupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference</a>

---

##### `quantityBasedRetention`<sup>Required</sup> <a name="quantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention"></a>

```typescript
public readonly quantityBasedRetention: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference</a>

---

##### `timeBasedRetention`<sup>Required</sup> <a name="timeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention"></a>

```typescript
public readonly timeBasedRetention: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference</a>

---

##### `backupWindowInput`<sup>Optional</sup> <a name="backupWindowInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindowInput"></a>

```typescript
public readonly backupWindowInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `quantityBasedRetentionInput`<sup>Optional</sup> <a name="quantityBasedRetentionInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetentionInput"></a>

```typescript
public readonly quantityBasedRetentionInput: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---

##### `timeBasedRetentionInput`<sup>Optional</sup> <a name="timeBasedRetentionInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetentionInput"></a>

```typescript
public readonly timeBasedRetentionInput: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---

##### `backupWindow`<sup>Required</sup> <a name="backupWindow" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow"></a>

```typescript
public readonly backupWindow: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterAutomatedBackupPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resetCount">resetCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resetRetentionPeriod"></a>

```typescript
public resetRetentionPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes">putStartTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTimes` <a name="putStartTimes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes"></a>

```typescript
public putStartTimes(value: IResolvable | GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>[]

---

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes">startTimes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimesInput">startTimesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTimes`<sup>Required</sup> <a name="startTimes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes"></a>

```typescript
public readonly startTimes: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a>

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `startTimesInput`<sup>Optional</sup> <a name="startTimesInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimesInput"></a>

```typescript
public readonly startTimesInput: IResolvable | GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get"></a>

```typescript
public get(index: number): GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>[]

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>

---


### GoogleAlloydbClusterBackupSourceList <a name="GoogleAlloydbClusterBackupSourceList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get"></a>

```typescript
public get(index: number): GoogleAlloydbClusterBackupSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleAlloydbClusterBackupSourceOutputReference <a name="GoogleAlloydbClusterBackupSourceOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.backupName">backupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource">GoogleAlloydbClusterBackupSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupName`<sup>Required</sup> <a name="backupName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.backupName"></a>

```typescript
public readonly backupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource">GoogleAlloydbClusterBackupSource</a>

---


### GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference <a name="GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---


### GoogleAlloydbClusterContinuousBackupConfigOutputReference <a name="GoogleAlloydbClusterContinuousBackupConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetRecoveryWindowDays">resetRecoveryWindowDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetRecoveryWindowDays` <a name="resetRecoveryWindowDays" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetRecoveryWindowDays"></a>

```typescript
public resetRecoveryWindowDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDaysInput">recoveryWindowDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays">recoveryWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---

##### `recoveryWindowDaysInput`<sup>Optional</sup> <a name="recoveryWindowDaysInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDaysInput"></a>

```typescript
public readonly recoveryWindowDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recoveryWindowDays`<sup>Required</sup> <a name="recoveryWindowDays" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays"></a>

```typescript
public readonly recoveryWindowDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterContinuousBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get"></a>

```typescript
public get(index: number): GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions">kmsKeyVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `kmsKeyVersions`<sup>Required</sup> <a name="kmsKeyVersions" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```typescript
public readonly kmsKeyVersions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo</a>

---


### GoogleAlloydbClusterContinuousBackupInfoList <a name="GoogleAlloydbClusterContinuousBackupInfoList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get"></a>

```typescript
public get(index: number): GoogleAlloydbClusterContinuousBackupInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleAlloydbClusterContinuousBackupInfoOutputReference <a name="GoogleAlloydbClusterContinuousBackupInfoOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime">earliestRestorableTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime">enabledTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo">encryptionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.schedule">schedule</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo">GoogleAlloydbClusterContinuousBackupInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="earliestRestorableTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime"></a>

```typescript
public readonly earliestRestorableTime: string;
```

- *Type:* string

---

##### `enabledTime`<sup>Required</sup> <a name="enabledTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime"></a>

```typescript
public readonly enabledTime: string;
```

- *Type:* string

---

##### `encryptionInfo`<sup>Required</sup> <a name="encryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo"></a>

```typescript
public readonly encryptionInfo: GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterContinuousBackupInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo">GoogleAlloydbClusterContinuousBackupInfo</a>

---


### GoogleAlloydbClusterEncryptionConfigOutputReference <a name="GoogleAlloydbClusterEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---


### GoogleAlloydbClusterEncryptionInfoList <a name="GoogleAlloydbClusterEncryptionInfoList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get"></a>

```typescript
public get(index: number): GoogleAlloydbClusterEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleAlloydbClusterEncryptionInfoOutputReference <a name="GoogleAlloydbClusterEncryptionInfoOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions">kmsKeyVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo">GoogleAlloydbClusterEncryptionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `kmsKeyVersions`<sup>Required</sup> <a name="kmsKeyVersions" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```typescript
public readonly kmsKeyVersions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterEncryptionInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo">GoogleAlloydbClusterEncryptionInfo</a>

---


### GoogleAlloydbClusterInitialUserOutputReference <a name="GoogleAlloydbClusterInitialUserOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUser` <a name="resetUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterInitialUser;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---


### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get"></a>

```typescript
public get(index: number): GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>[]

---


### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>

---


### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

---


### GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.putMaintenanceWindows">putMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resetMaintenanceWindows">resetMaintenanceWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceWindows` <a name="putMaintenanceWindows" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.putMaintenanceWindows"></a>

```typescript
public putMaintenanceWindows(value: IResolvable | GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.putMaintenanceWindows.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>[]

---

##### `resetMaintenanceWindows` <a name="resetMaintenanceWindows" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resetMaintenanceWindows"></a>

```typescript
public resetMaintenanceWindows(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindows">maintenanceWindows</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindowsInput">maintenanceWindowsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceWindows`<sup>Required</sup> <a name="maintenanceWindows" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindows"></a>

```typescript
public readonly maintenanceWindows: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList</a>

---

##### `maintenanceWindowsInput`<sup>Optional</sup> <a name="maintenanceWindowsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindowsInput"></a>

```typescript
public readonly maintenanceWindowsInput: IResolvable | GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterMaintenanceUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a>

---


### GoogleAlloydbClusterMigrationSourceList <a name="GoogleAlloydbClusterMigrationSourceList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get"></a>

```typescript
public get(index: number): GoogleAlloydbClusterMigrationSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleAlloydbClusterMigrationSourceOutputReference <a name="GoogleAlloydbClusterMigrationSourceOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.hostPort">hostPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.referenceId">referenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource">GoogleAlloydbClusterMigrationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostPort`<sup>Required</sup> <a name="hostPort" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.hostPort"></a>

```typescript
public readonly hostPort: string;
```

- *Type:* string

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterMigrationSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource">GoogleAlloydbClusterMigrationSource</a>

---


### GoogleAlloydbClusterNetworkConfigOutputReference <a name="GoogleAlloydbClusterNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resetAllocatedIpRange">resetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocatedIpRange` <a name="resetAllocatedIpRange" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resetAllocatedIpRange"></a>

```typescript
public resetAllocatedIpRange(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRangeInput">allocatedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedIpRangeInput`<sup>Optional</sup> <a name="allocatedIpRangeInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRangeInput"></a>

```typescript
public readonly allocatedIpRangeInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRange"></a>

```typescript
public readonly allocatedIpRange: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a>

---


### GoogleAlloydbClusterPscConfigOutputReference <a name="GoogleAlloydbClusterPscConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resetPscEnabled">resetPscEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPscEnabled` <a name="resetPscEnabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resetPscEnabled"></a>

```typescript
public resetPscEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.pscEnabledInput">pscEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.pscEnabled">pscEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pscEnabledInput`<sup>Optional</sup> <a name="pscEnabledInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.pscEnabledInput"></a>

```typescript
public readonly pscEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pscEnabled`<sup>Required</sup> <a name="pscEnabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.pscEnabled"></a>

```typescript
public readonly pscEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterPscConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a>

---


### GoogleAlloydbClusterRestoreBackupSourceOutputReference <a name="GoogleAlloydbClusterRestoreBackupSourceOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupNameInput">backupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupName">backupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupNameInput`<sup>Optional</sup> <a name="backupNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupNameInput"></a>

```typescript
public readonly backupNameInput: string;
```

- *Type:* string

---

##### `backupName`<sup>Required</sup> <a name="backupName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupName"></a>

```typescript
public readonly backupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterRestoreBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---


### GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference <a name="GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTimeInput">pointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime">pointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `pointInTimeInput`<sup>Optional</sup> <a name="pointInTimeInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTimeInput"></a>

```typescript
public readonly pointInTimeInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime"></a>

```typescript
public readonly pointInTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterRestoreContinuousBackupSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---


### GoogleAlloydbClusterSecondaryConfigOutputReference <a name="GoogleAlloydbClusterSecondaryConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterNameInput">primaryClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterName">primaryClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryClusterNameInput`<sup>Optional</sup> <a name="primaryClusterNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterNameInput"></a>

```typescript
public readonly primaryClusterNameInput: string;
```

- *Type:* string

---

##### `primaryClusterName`<sup>Required</sup> <a name="primaryClusterName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterName"></a>

```typescript
public readonly primaryClusterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterSecondaryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a>

---


### GoogleAlloydbClusterTimeoutsOutputReference <a name="GoogleAlloydbClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAlloydbClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a>

---


### GoogleAlloydbClusterTrialMetadataList <a name="GoogleAlloydbClusterTrialMetadataList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.get"></a>

```typescript
public get(index: number): GoogleAlloydbClusterTrialMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleAlloydbClusterTrialMetadataOutputReference <a name="GoogleAlloydbClusterTrialMetadataOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer"></a>

```typescript
import { googleAlloydbCluster } from '@cdktf/provider-google-beta'

new googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.graceEndTime">graceEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.upgradeTime">upgradeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata">GoogleAlloydbClusterTrialMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `graceEndTime`<sup>Required</sup> <a name="graceEndTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.graceEndTime"></a>

```typescript
public readonly graceEndTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `upgradeTime`<sup>Required</sup> <a name="upgradeTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.upgradeTime"></a>

```typescript
public readonly upgradeTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbClusterTrialMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata">GoogleAlloydbClusterTrialMetadata</a>

---



