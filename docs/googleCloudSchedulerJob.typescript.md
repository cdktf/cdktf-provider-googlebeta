# `googleCloudSchedulerJob` Submodule <a name="`googleCloudSchedulerJob` Submodule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSchedulerJob <a name="GoogleCloudSchedulerJob" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job google_cloud_scheduler_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJob(scope: Construct, id: string, config: GoogleCloudSchedulerJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig">GoogleCloudSchedulerJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig">GoogleCloudSchedulerJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget">putAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget">putHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget">putPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAppEngineHttpTarget">resetAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAttemptDeadline">resetAttemptDeadline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetHttpTarget">resetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPubsubTarget">resetPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngineHttpTarget` <a name="putAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget"></a>

```typescript
public putAppEngineHttpTarget(value: GoogleCloudSchedulerJobAppEngineHttpTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---

##### `putHttpTarget` <a name="putHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget"></a>

```typescript
public putHttpTarget(value: GoogleCloudSchedulerJobHttpTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---

##### `putPubsubTarget` <a name="putPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget"></a>

```typescript
public putPubsubTarget(value: GoogleCloudSchedulerJobPubsubTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig"></a>

```typescript
public putRetryConfig(value: GoogleCloudSchedulerJobRetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudSchedulerJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

---

##### `resetAppEngineHttpTarget` <a name="resetAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAppEngineHttpTarget"></a>

```typescript
public resetAppEngineHttpTarget(): void
```

##### `resetAttemptDeadline` <a name="resetAttemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAttemptDeadline"></a>

```typescript
public resetAttemptDeadline(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHttpTarget` <a name="resetHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetHttpTarget"></a>

```typescript
public resetHttpTarget(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPubsubTarget` <a name="resetPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPubsubTarget"></a>

```typescript
public resetPubsubTarget(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRetryConfig"></a>

```typescript
public resetRetryConfig(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudSchedulerJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudSchedulerJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudSchedulerJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudSchedulerJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudSchedulerJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference">GoogleCloudSchedulerJobHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference">GoogleCloudSchedulerJobPubsubTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference">GoogleCloudSchedulerJobRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference">GoogleCloudSchedulerJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTargetInput">appEngineHttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadlineInput">attemptDeadlineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTargetInput">httpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTargetInput">pubsubTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfigInput">retryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadline">attemptDeadline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appEngineHttpTarget`<sup>Required</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTarget"></a>

```typescript
public readonly appEngineHttpTarget: GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference</a>

---

##### `httpTarget`<sup>Required</sup> <a name="httpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTarget"></a>

```typescript
public readonly httpTarget: GoogleCloudSchedulerJobHttpTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference">GoogleCloudSchedulerJobHttpTargetOutputReference</a>

---

##### `pubsubTarget`<sup>Required</sup> <a name="pubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTarget"></a>

```typescript
public readonly pubsubTarget: GoogleCloudSchedulerJobPubsubTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference">GoogleCloudSchedulerJobPubsubTargetOutputReference</a>

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfig"></a>

```typescript
public readonly retryConfig: GoogleCloudSchedulerJobRetryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference">GoogleCloudSchedulerJobRetryConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudSchedulerJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference">GoogleCloudSchedulerJobTimeoutsOutputReference</a>

---

##### `appEngineHttpTargetInput`<sup>Optional</sup> <a name="appEngineHttpTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTargetInput"></a>

```typescript
public readonly appEngineHttpTargetInput: GoogleCloudSchedulerJobAppEngineHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---

##### `attemptDeadlineInput`<sup>Optional</sup> <a name="attemptDeadlineInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadlineInput"></a>

```typescript
public readonly attemptDeadlineInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `httpTargetInput`<sup>Optional</sup> <a name="httpTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTargetInput"></a>

```typescript
public readonly httpTargetInput: GoogleCloudSchedulerJobHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pubsubTargetInput`<sup>Optional</sup> <a name="pubsubTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTargetInput"></a>

```typescript
public readonly pubsubTargetInput: GoogleCloudSchedulerJobPubsubTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfigInput"></a>

```typescript
public readonly retryConfigInput: GoogleCloudSchedulerJobRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudSchedulerJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `attemptDeadline`<sup>Required</sup> <a name="attemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadline"></a>

```typescript
public readonly attemptDeadline: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSchedulerJobAppEngineHttpTarget <a name="GoogleCloudSchedulerJobAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobAppEngineHttpTarget: googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.relativeUri">relativeUri</a></code> | <code>string</code> | The relative URI. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting">appEngineRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | app_engine_routing block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.body">body</a></code> | <code>string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.httpMethod">httpMethod</a></code> | <code>string</code> | Which HTTP method to use for the request. |

---

##### `relativeUri`<sup>Required</sup> <a name="relativeUri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.relativeUri"></a>

```typescript
public readonly relativeUri: string;
```

- *Type:* string

The relative URI.

The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and \# fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#relative_uri GoogleCloudSchedulerJob#relative_uri}

---

##### `appEngineRouting`<sup>Optional</sup> <a name="appEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting"></a>

```typescript
public readonly appEngineRouting: GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

app_engine_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#app_engine_routing GoogleCloudSchedulerJob#app_engine_routing}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

HTTP request body.

A request body is allowed only if the HTTP method is POST or PUT.
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#body GoogleCloudSchedulerJob#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#headers GoogleCloudSchedulerJob#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#http_method GoogleCloudSchedulerJob#http_method}

---

### GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting <a name="GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting: googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance">instance</a></code> | <code>string</code> | App instance. By default, the job is sent to an instance which is available when the job is attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service">service</a></code> | <code>string</code> | App service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version">version</a></code> | <code>string</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

App instance. By default, the job is sent to an instance which is available when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#instance GoogleCloudSchedulerJob#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

App service.

By default, the job is sent to the service which is the default service when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#service GoogleCloudSchedulerJob#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

App version.

By default, the job is sent to the version which is the default version when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#version GoogleCloudSchedulerJob#version}

---

### GoogleCloudSchedulerJobConfig <a name="GoogleCloudSchedulerJobConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobConfig: googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.name">name</a></code> | <code>string</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.attemptDeadline">attemptDeadline</a></code> | <code>string</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.description">description</a></code> | <code>string</code> | A human-readable description for the job. This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.region">region</a></code> | <code>string</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.schedule">schedule</a></code> | <code>string</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#name GoogleCloudSchedulerJob#name}

---

##### `appEngineHttpTarget`<sup>Optional</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.appEngineHttpTarget"></a>

```typescript
public readonly appEngineHttpTarget: GoogleCloudSchedulerJobAppEngineHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#app_engine_http_target GoogleCloudSchedulerJob#app_engine_http_target}

---

##### `attemptDeadline`<sup>Optional</sup> <a name="attemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.attemptDeadline"></a>

```typescript
public readonly attemptDeadline: string;
```

- *Type:* string

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:
* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#attempt_deadline GoogleCloudSchedulerJob#attempt_deadline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description for the job. This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#description GoogleCloudSchedulerJob#description}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.httpTarget"></a>

```typescript
public readonly httpTarget: GoogleCloudSchedulerJobHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#http_target GoogleCloudSchedulerJob#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#paused GoogleCloudSchedulerJob#paused}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}.

---

##### `pubsubTarget`<sup>Optional</sup> <a name="pubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.pubsubTarget"></a>

```typescript
public readonly pubsubTarget: GoogleCloudSchedulerJobPubsubTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#pubsub_target GoogleCloudSchedulerJob#pubsub_target}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#region GoogleCloudSchedulerJob#region}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.retryConfig"></a>

```typescript
public readonly retryConfig: GoogleCloudSchedulerJobRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#retry_config GoogleCloudSchedulerJob#retry_config}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#schedule GoogleCloudSchedulerJob#schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudSchedulerJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#timeouts GoogleCloudSchedulerJob#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#time_zone GoogleCloudSchedulerJob#time_zone}

---

### GoogleCloudSchedulerJobHttpTarget <a name="GoogleCloudSchedulerJobHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobHttpTarget: googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.uri">uri</a></code> | <code>string</code> | The full URI path that the request will be sent to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.body">body</a></code> | <code>string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | This map contains the header field names and values. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.httpMethod">httpMethod</a></code> | <code>string</code> | Which HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | oidc_token block. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The full URI path that the request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#uri GoogleCloudSchedulerJob#uri}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

HTTP request body.

A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#body GoogleCloudSchedulerJob#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

This map contains the header field names and values.

Repeated headers are not supported, but a header value can contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#headers GoogleCloudSchedulerJob#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#http_method GoogleCloudSchedulerJob#http_method}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oauthToken"></a>

```typescript
public readonly oauthToken: GoogleCloudSchedulerJobHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#oauth_token GoogleCloudSchedulerJob#oauth_token}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oidcToken"></a>

```typescript
public readonly oidcToken: GoogleCloudSchedulerJobHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#oidc_token GoogleCloudSchedulerJob#oidc_token}

---

### GoogleCloudSchedulerJobHttpTargetOauthToken <a name="GoogleCloudSchedulerJobHttpTargetOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobHttpTargetOauthToken: googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.scope">scope</a></code> | <code>string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#service_account_email GoogleCloudSchedulerJob#service_account_email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#scope GoogleCloudSchedulerJob#scope}

---

### GoogleCloudSchedulerJobHttpTargetOidcToken <a name="GoogleCloudSchedulerJobHttpTargetOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobHttpTargetOidcToken: googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.audience">audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#service_account_email GoogleCloudSchedulerJob#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#audience GoogleCloudSchedulerJob#audience}

---

### GoogleCloudSchedulerJobPubsubTarget <a name="GoogleCloudSchedulerJobPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobPubsubTarget: googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.topicName">topicName</a></code> | <code>string</code> | The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.data">data</a></code> | <code>string</code> | The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered.

~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#topic_name GoogleCloudSchedulerJob#topic_name}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#attributes GoogleCloudSchedulerJob#attributes}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#data GoogleCloudSchedulerJob#data}

---

### GoogleCloudSchedulerJobRetryConfig <a name="GoogleCloudSchedulerJobRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobRetryConfig: googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxBackoffDuration">maxBackoffDuration</a></code> | <code>string</code> | The maximum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxDoublings">maxDoublings</a></code> | <code>number</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxRetryDuration">maxRetryDuration</a></code> | <code>string</code> | The time limit for retrying a failed job, measured from time when an execution was first attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.minBackoffDuration">minBackoffDuration</a></code> | <code>string</code> | The minimum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.retryCount">retryCount</a></code> | <code>number</code> | The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings. |

---

##### `maxBackoffDuration`<sup>Optional</sup> <a name="maxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxBackoffDuration"></a>

```typescript
public readonly maxBackoffDuration: string;
```

- *Type:* string

The maximum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#max_backoff_duration GoogleCloudSchedulerJob#max_backoff_duration}

---

##### `maxDoublings`<sup>Optional</sup> <a name="maxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxDoublings"></a>

```typescript
public readonly maxDoublings: number;
```

- *Type:* number

The time between retries will double maxDoublings times.

A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#max_doublings GoogleCloudSchedulerJob#max_doublings}

---

##### `maxRetryDuration`<sup>Optional</sup> <a name="maxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxRetryDuration"></a>

```typescript
public readonly maxRetryDuration: string;
```

- *Type:* string

The time limit for retrying a failed job, measured from time when an execution was first attempted.

If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#max_retry_duration GoogleCloudSchedulerJob#max_retry_duration}

---

##### `minBackoffDuration`<sup>Optional</sup> <a name="minBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.minBackoffDuration"></a>

```typescript
public readonly minBackoffDuration: string;
```

- *Type:* string

The minimum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#min_backoff_duration GoogleCloudSchedulerJob#min_backoff_duration}

---

##### `retryCount`<sup>Optional</sup> <a name="retryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings.

Values greater than 5 and negative values are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#retry_count GoogleCloudSchedulerJob#retry_count}

---

### GoogleCloudSchedulerJobTimeouts <a name="GoogleCloudSchedulerJobTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

const googleCloudSchedulerJobTimeouts: googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#create GoogleCloudSchedulerJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#delete GoogleCloudSchedulerJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#update GoogleCloudSchedulerJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#create GoogleCloudSchedulerJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#delete GoogleCloudSchedulerJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#update GoogleCloudSchedulerJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference <a name="GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance"></a>

```typescript
public resetInstance(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---


### GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference <a name="GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting">putAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting">resetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppEngineRouting` <a name="putAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting"></a>

```typescript
public putAppEngineRouting(value: GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `resetAppEngineRouting` <a name="resetAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting"></a>

```typescript
public resetAppEngineRouting(): void
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting">appEngineRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput">appEngineRoutingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput">relativeUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri">relativeUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appEngineRouting`<sup>Required</sup> <a name="appEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting"></a>

```typescript
public readonly appEngineRouting: GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a>

---

##### `appEngineRoutingInput`<sup>Optional</sup> <a name="appEngineRoutingInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput"></a>

```typescript
public readonly appEngineRoutingInput: GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `relativeUriInput`<sup>Optional</sup> <a name="relativeUriInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput"></a>

```typescript
public readonly relativeUriInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `relativeUri`<sup>Required</sup> <a name="relativeUri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri"></a>

```typescript
public readonly relativeUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSchedulerJobAppEngineHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---


### GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSchedulerJobHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---


### GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSchedulerJobHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---


### GoogleCloudSchedulerJobHttpTargetOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken">putOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauthToken` <a name="putOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken"></a>

```typescript
public putOauthToken(value: GoogleCloudSchedulerJobHttpTargetOauthToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken"></a>

```typescript
public putOidcToken(value: GoogleCloudSchedulerJobHttpTargetOidcToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOauthToken"></a>

```typescript
public resetOauthToken(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthToken"></a>

```typescript
public readonly oauthToken: GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcToken"></a>

```typescript
public readonly oidcToken: GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: GoogleCloudSchedulerJobHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: GoogleCloudSchedulerJobHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSchedulerJobHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---


### GoogleCloudSchedulerJobPubsubTargetOutputReference <a name="GoogleCloudSchedulerJobPubsubTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput">topicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput"></a>

```typescript
public readonly topicNameInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSchedulerJobPubsubTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---


### GoogleCloudSchedulerJobRetryConfigOutputReference <a name="GoogleCloudSchedulerJobRetryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration">resetMaxBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings">resetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration">resetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration">resetMinBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetRetryCount">resetRetryCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackoffDuration` <a name="resetMaxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration"></a>

```typescript
public resetMaxBackoffDuration(): void
```

##### `resetMaxDoublings` <a name="resetMaxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings"></a>

```typescript
public resetMaxDoublings(): void
```

##### `resetMaxRetryDuration` <a name="resetMaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration"></a>

```typescript
public resetMaxRetryDuration(): void
```

##### `resetMinBackoffDuration` <a name="resetMinBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration"></a>

```typescript
public resetMinBackoffDuration(): void
```

##### `resetRetryCount` <a name="resetRetryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetRetryCount"></a>

```typescript
public resetRetryCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput">maxBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput">maxDoublingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput">maxRetryDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput">minBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCountInput">retryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration">maxBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublings">maxDoublings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration">maxRetryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration">minBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCount">retryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBackoffDurationInput`<sup>Optional</sup> <a name="maxBackoffDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput"></a>

```typescript
public readonly maxBackoffDurationInput: string;
```

- *Type:* string

---

##### `maxDoublingsInput`<sup>Optional</sup> <a name="maxDoublingsInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput"></a>

```typescript
public readonly maxDoublingsInput: number;
```

- *Type:* number

---

##### `maxRetryDurationInput`<sup>Optional</sup> <a name="maxRetryDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```typescript
public readonly maxRetryDurationInput: string;
```

- *Type:* string

---

##### `minBackoffDurationInput`<sup>Optional</sup> <a name="minBackoffDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput"></a>

```typescript
public readonly minBackoffDurationInput: string;
```

- *Type:* string

---

##### `retryCountInput`<sup>Optional</sup> <a name="retryCountInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCountInput"></a>

```typescript
public readonly retryCountInput: number;
```

- *Type:* number

---

##### `maxBackoffDuration`<sup>Required</sup> <a name="maxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration"></a>

```typescript
public readonly maxBackoffDuration: string;
```

- *Type:* string

---

##### `maxDoublings`<sup>Required</sup> <a name="maxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublings"></a>

```typescript
public readonly maxDoublings: number;
```

- *Type:* number

---

##### `maxRetryDuration`<sup>Required</sup> <a name="maxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration"></a>

```typescript
public readonly maxRetryDuration: string;
```

- *Type:* string

---

##### `minBackoffDuration`<sup>Required</sup> <a name="minBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration"></a>

```typescript
public readonly minBackoffDuration: string;
```

- *Type:* string

---

##### `retryCount`<sup>Required</sup> <a name="retryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSchedulerJobRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---


### GoogleCloudSchedulerJobTimeoutsOutputReference <a name="GoogleCloudSchedulerJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudSchedulerJob } from '@cdktf/provider-google-beta'

new googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudSchedulerJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

---



