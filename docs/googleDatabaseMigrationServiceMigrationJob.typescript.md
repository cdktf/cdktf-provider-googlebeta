# `googleDatabaseMigrationServiceMigrationJob` Submodule <a name="`googleDatabaseMigrationServiceMigrationJob` Submodule" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatabaseMigrationServiceMigrationJob <a name="GoogleDatabaseMigrationServiceMigrationJob" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job google_database_migration_service_migration_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob(scope: Construct, id: string, config: GoogleDatabaseMigrationServiceMigrationJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig">GoogleDatabaseMigrationServiceMigrationJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig">GoogleDatabaseMigrationServiceMigrationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags">putDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig">putPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity">putReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity">putStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity">putVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpFlags">resetDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpPath">resetDumpPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpType">resetDumpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetPerformanceConfig">resetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity">resetReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity">resetStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity">resetVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDumpFlags` <a name="putDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags"></a>

```typescript
public putDumpFlags(value: GoogleDatabaseMigrationServiceMigrationJobDumpFlags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `putPerformanceConfig` <a name="putPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig"></a>

```typescript
public putPerformanceConfig(value: GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `putReverseSshConnectivity` <a name="putReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity"></a>

```typescript
public putReverseSshConnectivity(value: GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `putStaticIpConnectivity` <a name="putStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity"></a>

```typescript
public putStaticIpConnectivity(value: GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDatabaseMigrationServiceMigrationJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `putVpcPeeringConnectivity` <a name="putVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity"></a>

```typescript
public putVpcPeeringConnectivity(value: GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDumpFlags` <a name="resetDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpFlags"></a>

```typescript
public resetDumpFlags(): void
```

##### `resetDumpPath` <a name="resetDumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpPath"></a>

```typescript
public resetDumpPath(): void
```

##### `resetDumpType` <a name="resetDumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpType"></a>

```typescript
public resetDumpType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPerformanceConfig` <a name="resetPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetPerformanceConfig"></a>

```typescript
public resetPerformanceConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReverseSshConnectivity` <a name="resetReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity"></a>

```typescript
public resetReverseSshConnectivity(): void
```

##### `resetStaticIpConnectivity` <a name="resetStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity"></a>

```typescript
public resetStaticIpConnectivity(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcPeeringConnectivity` <a name="resetVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity"></a>

```typescript
public resetVpcPeeringConnectivity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDatabaseMigrationServiceMigrationJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDatabaseMigrationServiceMigrationJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDatabaseMigrationServiceMigrationJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDatabaseMigrationServiceMigrationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatabaseMigrationServiceMigrationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList">GoogleDatabaseMigrationServiceMigrationJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference">GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlagsInput">dumpFlagsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPathInput">dumpPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpTypeInput">dumpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobIdInput">migrationJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfigInput">performanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput">reverseSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput">staticIpConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput">vpcPeeringConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPath">dumpPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpType">dumpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobId">migrationJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dumpFlags`<sup>Required</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlags"></a>

```typescript
public readonly dumpFlags: GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.error"></a>

```typescript
public readonly error: GoogleDatabaseMigrationServiceMigrationJobErrorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList">GoogleDatabaseMigrationServiceMigrationJobErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `performanceConfig`<sup>Required</sup> <a name="performanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfig"></a>

```typescript
public readonly performanceConfig: GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a>

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `reverseSshConnectivity`<sup>Required</sup> <a name="reverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity"></a>

```typescript
public readonly reverseSshConnectivity: GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `staticIpConnectivity`<sup>Required</sup> <a name="staticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivity"></a>

```typescript
public readonly staticIpConnectivity: GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference">GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a>

---

##### `vpcPeeringConnectivity`<sup>Required</sup> <a name="vpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity"></a>

```typescript
public readonly vpcPeeringConnectivity: GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dumpFlagsInput`<sup>Optional</sup> <a name="dumpFlagsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlagsInput"></a>

```typescript
public readonly dumpFlagsInput: GoogleDatabaseMigrationServiceMigrationJobDumpFlags;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `dumpPathInput`<sup>Optional</sup> <a name="dumpPathInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPathInput"></a>

```typescript
public readonly dumpPathInput: string;
```

- *Type:* string

---

##### `dumpTypeInput`<sup>Optional</sup> <a name="dumpTypeInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpTypeInput"></a>

```typescript
public readonly dumpTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `migrationJobIdInput`<sup>Optional</sup> <a name="migrationJobIdInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobIdInput"></a>

```typescript
public readonly migrationJobIdInput: string;
```

- *Type:* string

---

##### `performanceConfigInput`<sup>Optional</sup> <a name="performanceConfigInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfigInput"></a>

```typescript
public readonly performanceConfigInput: GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reverseSshConnectivityInput`<sup>Optional</sup> <a name="reverseSshConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput"></a>

```typescript
public readonly reverseSshConnectivityInput: GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `staticIpConnectivityInput`<sup>Optional</sup> <a name="staticIpConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput"></a>

```typescript
public readonly staticIpConnectivityInput: GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDatabaseMigrationServiceMigrationJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcPeeringConnectivityInput`<sup>Optional</sup> <a name="vpcPeeringConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput"></a>

```typescript
public readonly vpcPeeringConnectivityInput: GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dumpPath`<sup>Required</sup> <a name="dumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPath"></a>

```typescript
public readonly dumpPath: string;
```

- *Type:* string

---

##### `dumpType`<sup>Required</sup> <a name="dumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpType"></a>

```typescript
public readonly dumpType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobId"></a>

```typescript
public readonly migrationJobId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatabaseMigrationServiceMigrationJobConfig <a name="GoogleDatabaseMigrationServiceMigrationJobConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobConfig: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.destination">destination</a></code> | <code>string</code> | The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.migrationJobId">migrationJobId</a></code> | <code>string</code> | The ID of the migration job. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.source">source</a></code> | <code>string</code> | The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.type">type</a></code> | <code>string</code> | The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.displayName">displayName</a></code> | <code>string</code> | The migration job display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | dump_flags block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpPath">dumpPath</a></code> | <code>string</code> | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpType">dumpType</a></code> | <code>string</code> | The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#id GoogleDatabaseMigrationServiceMigrationJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.location">location</a></code> | <code>string</code> | The location where the migration job should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#project GoogleDatabaseMigrationServiceMigrationJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | reverse_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | static_ip_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | vpc_peering_connectivity block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#destination GoogleDatabaseMigrationServiceMigrationJob#destination}

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.migrationJobId"></a>

```typescript
public readonly migrationJobId: string;
```

- *Type:* string

The ID of the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#migration_job_id GoogleDatabaseMigrationServiceMigrationJob#migration_job_id}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#source GoogleDatabaseMigrationServiceMigrationJob#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#type GoogleDatabaseMigrationServiceMigrationJob#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The migration job display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#display_name GoogleDatabaseMigrationServiceMigrationJob#display_name}

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpFlags"></a>

```typescript
public readonly dumpFlags: GoogleDatabaseMigrationServiceMigrationJobDumpFlags;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#dump_flags GoogleDatabaseMigrationServiceMigrationJob#dump_flags}

---

##### `dumpPath`<sup>Optional</sup> <a name="dumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpPath"></a>

```typescript
public readonly dumpPath: string;
```

- *Type:* string

The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).

This field and the "dump_flags" field are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#dump_path GoogleDatabaseMigrationServiceMigrationJob#dump_path}

---

##### `dumpType`<sup>Optional</sup> <a name="dumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpType"></a>

```typescript
public readonly dumpType: string;
```

- *Type:* string

The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#dump_type GoogleDatabaseMigrationServiceMigrationJob#dump_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#id GoogleDatabaseMigrationServiceMigrationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#labels GoogleDatabaseMigrationServiceMigrationJob#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the migration job should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#location GoogleDatabaseMigrationServiceMigrationJob#location}

---

##### `performanceConfig`<sup>Optional</sup> <a name="performanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.performanceConfig"></a>

```typescript
public readonly performanceConfig: GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#performance_config GoogleDatabaseMigrationServiceMigrationJob#performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#project GoogleDatabaseMigrationServiceMigrationJob#project}.

---

##### `reverseSshConnectivity`<sup>Optional</sup> <a name="reverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity"></a>

```typescript
public readonly reverseSshConnectivity: GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

reverse_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#reverse_ssh_connectivity GoogleDatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}

---

##### `staticIpConnectivity`<sup>Optional</sup> <a name="staticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity"></a>

```typescript
public readonly staticIpConnectivity: GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

static_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#static_ip_connectivity GoogleDatabaseMigrationServiceMigrationJob#static_ip_connectivity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatabaseMigrationServiceMigrationJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#timeouts GoogleDatabaseMigrationServiceMigrationJob#timeouts}

---

##### `vpcPeeringConnectivity`<sup>Optional</sup> <a name="vpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity"></a>

```typescript
public readonly vpcPeeringConnectivity: GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

vpc_peering_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#vpc_peering_connectivity GoogleDatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}

---

### GoogleDatabaseMigrationServiceMigrationJobDumpFlags <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobDumpFlags: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags">dumpFlags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]</code> | dump_flags block. |

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags"></a>

```typescript
public readonly dumpFlags: IResolvable | GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#dump_flags GoogleDatabaseMigrationServiceMigrationJob#dump_flags}

---

### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name">name</a></code> | <code>string</code> | The name of the flag. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value">value</a></code> | <code>string</code> | The vale of the flag. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#name GoogleDatabaseMigrationServiceMigrationJob#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The vale of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#value GoogleDatabaseMigrationServiceMigrationJob#value}

---

### GoogleDatabaseMigrationServiceMigrationJobError <a name="GoogleDatabaseMigrationServiceMigrationJobError" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobError: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError = { ... }
```


### GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig <a name="GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobPerformanceConfig: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel">dumpParallelLevel</a></code> | <code>string</code> | Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"]. |

---

##### `dumpParallelLevel`<sup>Optional</sup> <a name="dumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel"></a>

```typescript
public readonly dumpParallelLevel: string;
```

- *Type:* string

Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#dump_parallel_level GoogleDatabaseMigrationServiceMigrationJob#dump_parallel_level}

---

### GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobReverseSshConnectivity: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm">vm</a></code> | <code>string</code> | The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp">vmIp</a></code> | <code>string</code> | The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort">vmPort</a></code> | <code>number</code> | The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc">vpc</a></code> | <code>string</code> | The name of the VPC to peer with the Cloud SQL private network. |

---

##### `vm`<sup>Optional</sup> <a name="vm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm"></a>

```typescript
public readonly vm: string;
```

- *Type:* string

The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#vm GoogleDatabaseMigrationServiceMigrationJob#vm}

---

##### `vmIp`<sup>Optional</sup> <a name="vmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp"></a>

```typescript
public readonly vmIp: string;
```

- *Type:* string

The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#vm_ip GoogleDatabaseMigrationServiceMigrationJob#vm_ip}

---

##### `vmPort`<sup>Optional</sup> <a name="vmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort"></a>

```typescript
public readonly vmPort: number;
```

- *Type:* number

The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#vm_port GoogleDatabaseMigrationServiceMigrationJob#vm_port}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

The name of the VPC to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#vpc GoogleDatabaseMigrationServiceMigrationJob#vpc}

---

### GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobStaticIpConnectivity: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity = { ... }
```


### GoogleDatabaseMigrationServiceMigrationJobTimeouts <a name="GoogleDatabaseMigrationServiceMigrationJobTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobTimeouts: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#create GoogleDatabaseMigrationServiceMigrationJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#delete GoogleDatabaseMigrationServiceMigrationJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#update GoogleDatabaseMigrationServiceMigrationJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#create GoogleDatabaseMigrationServiceMigrationJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#delete GoogleDatabaseMigrationServiceMigrationJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#update GoogleDatabaseMigrationServiceMigrationJob#update}.

---

### GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity: googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc">vpc</a></code> | <code>string</code> | The name of the VPC network to peer with the Cloud SQL private network. |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

The name of the VPC network to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_database_migration_service_migration_job#vpc GoogleDatabaseMigrationServiceMigrationJob#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get"></a>

```typescript
public get(index: number): GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]

---


### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>

---


### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags">putDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags">resetDumpFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDumpFlags` <a name="putDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags"></a>

```typescript
public putDumpFlags(value: IResolvable | GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]

---

##### `resetDumpFlags` <a name="resetDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags"></a>

```typescript
public resetDumpFlags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput">dumpFlagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dumpFlags`<sup>Required</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags"></a>

```typescript
public readonly dumpFlags: GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a>

---

##### `dumpFlagsInput`<sup>Optional</sup> <a name="dumpFlagsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput"></a>

```typescript
public readonly dumpFlagsInput: IResolvable | GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatabaseMigrationServiceMigrationJobDumpFlags;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---


### GoogleDatabaseMigrationServiceMigrationJobErrorList <a name="GoogleDatabaseMigrationServiceMigrationJobErrorList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get"></a>

```typescript
public get(index: number): GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError">GoogleDatabaseMigrationServiceMigrationJobError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatabaseMigrationServiceMigrationJobError;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError">GoogleDatabaseMigrationServiceMigrationJobError</a>

---


### GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel">resetDumpParallelLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDumpParallelLevel` <a name="resetDumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel"></a>

```typescript
public resetDumpParallelLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput">dumpParallelLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel">dumpParallelLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dumpParallelLevelInput`<sup>Optional</sup> <a name="dumpParallelLevelInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput"></a>

```typescript
public readonly dumpParallelLevelInput: string;
```

- *Type:* string

---

##### `dumpParallelLevel`<sup>Required</sup> <a name="dumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel"></a>

```typescript
public readonly dumpParallelLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---


### GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm">resetVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp">resetVmIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort">resetVmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVm` <a name="resetVm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm"></a>

```typescript
public resetVm(): void
```

##### `resetVmIp` <a name="resetVmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp"></a>

```typescript
public resetVmIp(): void
```

##### `resetVmPort` <a name="resetVmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort"></a>

```typescript
public resetVmPort(): void
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc"></a>

```typescript
public resetVpc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput">vmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput">vmIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput">vmPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm">vm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp">vmIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort">vmPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vmInput`<sup>Optional</sup> <a name="vmInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput"></a>

```typescript
public readonly vmInput: string;
```

- *Type:* string

---

##### `vmIpInput`<sup>Optional</sup> <a name="vmIpInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput"></a>

```typescript
public readonly vmIpInput: string;
```

- *Type:* string

---

##### `vmPortInput`<sup>Optional</sup> <a name="vmPortInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput"></a>

```typescript
public readonly vmPortInput: number;
```

- *Type:* number

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `vm`<sup>Required</sup> <a name="vm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm"></a>

```typescript
public readonly vm: string;
```

- *Type:* string

---

##### `vmIp`<sup>Required</sup> <a name="vmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp"></a>

```typescript
public readonly vmIp: string;
```

- *Type:* string

---

##### `vmPort`<sup>Required</sup> <a name="vmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort"></a>

```typescript
public readonly vmPort: number;
```

- *Type:* number

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---


### GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---


### GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDatabaseMigrationServiceMigrationJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

---


### GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServiceMigrationJob } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc"></a>

```typescript
public resetVpc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---



