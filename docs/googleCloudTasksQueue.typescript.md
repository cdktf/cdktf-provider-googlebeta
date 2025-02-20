# `googleCloudTasksQueue` Submodule <a name="`googleCloudTasksQueue` Submodule" id="@cdktf/provider-google-beta.googleCloudTasksQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudTasksQueue <a name="GoogleCloudTasksQueue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue google_cloud_tasks_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueue(scope: Construct, id: string, config: GoogleCloudTasksQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig">GoogleCloudTasksQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig">GoogleCloudTasksQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride">putAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget">putHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig">putStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetAppEngineRoutingOverride">resetAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetHttpTarget">resetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetStackdriverLoggingConfig">resetStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngineRoutingOverride` <a name="putAppEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride"></a>

```typescript
public putAppEngineRoutingOverride(value: GoogleCloudTasksQueueAppEngineRoutingOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

---

##### `putHttpTarget` <a name="putHttpTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget"></a>

```typescript
public putHttpTarget(value: GoogleCloudTasksQueueHttpTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits"></a>

```typescript
public putRateLimits(value: GoogleCloudTasksQueueRateLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

---

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig"></a>

```typescript
public putRetryConfig(value: GoogleCloudTasksQueueRetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

---

##### `putStackdriverLoggingConfig` <a name="putStackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig"></a>

```typescript
public putStackdriverLoggingConfig(value: GoogleCloudTasksQueueStackdriverLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudTasksQueueTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

---

##### `resetAppEngineRoutingOverride` <a name="resetAppEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetAppEngineRoutingOverride"></a>

```typescript
public resetAppEngineRoutingOverride(): void
```

##### `resetHttpTarget` <a name="resetHttpTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetHttpTarget"></a>

```typescript
public resetHttpTarget(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRateLimits"></a>

```typescript
public resetRateLimits(): void
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRetryConfig"></a>

```typescript
public resetRetryConfig(): void
```

##### `resetStackdriverLoggingConfig` <a name="resetStackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetStackdriverLoggingConfig"></a>

```typescript
public resetStackdriverLoggingConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudTasksQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudTasksQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudTasksQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudTasksQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudTasksQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverride">appEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference">GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference">GoogleCloudTasksQueueHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference">GoogleCloudTasksQueueRateLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference">GoogleCloudTasksQueueRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfig">stackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference">GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference">GoogleCloudTasksQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverrideInput">appEngineRoutingOverrideInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.httpTargetInput">httpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimitsInput">rateLimitsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfigInput">retryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfigInput">stackdriverLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appEngineRoutingOverride`<sup>Required</sup> <a name="appEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverride"></a>

```typescript
public readonly appEngineRoutingOverride: GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference">GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference</a>

---

##### `httpTarget`<sup>Required</sup> <a name="httpTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.httpTarget"></a>

```typescript
public readonly httpTarget: GoogleCloudTasksQueueHttpTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference">GoogleCloudTasksQueueHttpTargetOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimits"></a>

```typescript
public readonly rateLimits: GoogleCloudTasksQueueRateLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference">GoogleCloudTasksQueueRateLimitsOutputReference</a>

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfig"></a>

```typescript
public readonly retryConfig: GoogleCloudTasksQueueRetryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference">GoogleCloudTasksQueueRetryConfigOutputReference</a>

---

##### `stackdriverLoggingConfig`<sup>Required</sup> <a name="stackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfig"></a>

```typescript
public readonly stackdriverLoggingConfig: GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference">GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudTasksQueueTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference">GoogleCloudTasksQueueTimeoutsOutputReference</a>

---

##### `appEngineRoutingOverrideInput`<sup>Optional</sup> <a name="appEngineRoutingOverrideInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverrideInput"></a>

```typescript
public readonly appEngineRoutingOverrideInput: GoogleCloudTasksQueueAppEngineRoutingOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

---

##### `httpTargetInput`<sup>Optional</sup> <a name="httpTargetInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.httpTargetInput"></a>

```typescript
public readonly httpTargetInput: GoogleCloudTasksQueueHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimitsInput"></a>

```typescript
public readonly rateLimitsInput: GoogleCloudTasksQueueRateLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfigInput"></a>

```typescript
public readonly retryConfigInput: GoogleCloudTasksQueueRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

---

##### `stackdriverLoggingConfigInput`<sup>Optional</sup> <a name="stackdriverLoggingConfigInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfigInput"></a>

```typescript
public readonly stackdriverLoggingConfigInput: GoogleCloudTasksQueueStackdriverLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudTasksQueueTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudTasksQueueAppEngineRoutingOverride <a name="GoogleCloudTasksQueueAppEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueAppEngineRoutingOverride: googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.instance">instance</a></code> | <code>string</code> | App instance. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.service">service</a></code> | <code>string</code> | App service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.version">version</a></code> | <code>string</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#instance GoogleCloudTasksQueue#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#service GoogleCloudTasksQueue#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#version GoogleCloudTasksQueue#version}

---

### GoogleCloudTasksQueueConfig <a name="GoogleCloudTasksQueueConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueConfig: googleCloudTasksQueue.GoogleCloudTasksQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.location">location</a></code> | <code>string</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.appEngineRoutingOverride">appEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.name">name</a></code> | <code>string</code> | The queue name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.stackdriverLoggingConfig">stackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#location GoogleCloudTasksQueue#location}

---

##### `appEngineRoutingOverride`<sup>Optional</sup> <a name="appEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.appEngineRoutingOverride"></a>

```typescript
public readonly appEngineRoutingOverride: GoogleCloudTasksQueueAppEngineRoutingOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#app_engine_routing_override GoogleCloudTasksQueue#app_engine_routing_override}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.httpTarget"></a>

```typescript
public readonly httpTarget: GoogleCloudTasksQueueHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#http_target GoogleCloudTasksQueue#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#name GoogleCloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.rateLimits"></a>

```typescript
public readonly rateLimits: GoogleCloudTasksQueueRateLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#rate_limits GoogleCloudTasksQueue#rate_limits}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.retryConfig"></a>

```typescript
public readonly retryConfig: GoogleCloudTasksQueueRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#retry_config GoogleCloudTasksQueue#retry_config}

---

##### `stackdriverLoggingConfig`<sup>Optional</sup> <a name="stackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.stackdriverLoggingConfig"></a>

```typescript
public readonly stackdriverLoggingConfig: GoogleCloudTasksQueueStackdriverLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#stackdriver_logging_config GoogleCloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudTasksQueueTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#timeouts GoogleCloudTasksQueue#timeouts}

---

### GoogleCloudTasksQueueHttpTarget <a name="GoogleCloudTasksQueueHttpTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueHttpTarget: googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.headerOverrides">headerOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>[]</code> | header_overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.httpMethod">httpMethod</a></code> | <code>string</code> | The HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.uriOverride">uriOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a></code> | uri_override block. |

---

##### `headerOverrides`<sup>Optional</sup> <a name="headerOverrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.headerOverrides"></a>

```typescript
public readonly headerOverrides: IResolvable | GoogleCloudTasksQueueHttpTargetHeaderOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>[]

header_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#header_overrides GoogleCloudTasksQueue#header_overrides}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

The HTTP method to use for the request.

When specified, it overrides HttpRequest for the task.
Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#http_method GoogleCloudTasksQueue#http_method}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.oauthToken"></a>

```typescript
public readonly oauthToken: GoogleCloudTasksQueueHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#oauth_token GoogleCloudTasksQueue#oauth_token}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.oidcToken"></a>

```typescript
public readonly oidcToken: GoogleCloudTasksQueueHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#oidc_token GoogleCloudTasksQueue#oidc_token}

---

##### `uriOverride`<sup>Optional</sup> <a name="uriOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.uriOverride"></a>

```typescript
public readonly uriOverride: GoogleCloudTasksQueueHttpTargetUriOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a>

uri_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#uri_override GoogleCloudTasksQueue#uri_override}

---

### GoogleCloudTasksQueueHttpTargetHeaderOverrides <a name="GoogleCloudTasksQueueHttpTargetHeaderOverrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueHttpTargetHeaderOverrides: googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides.property.header">header</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | header block. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides.property.header"></a>

```typescript
public readonly header: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#header GoogleCloudTasksQueue#header}

---

### GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader <a name="GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueHttpTargetHeaderOverridesHeader: googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.property.key">key</a></code> | <code>string</code> | The Key of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.property.value">value</a></code> | <code>string</code> | The Value of the header. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The Key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#key GoogleCloudTasksQueue#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The Value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#value GoogleCloudTasksQueue#value}

---

### GoogleCloudTasksQueueHttpTargetOauthToken <a name="GoogleCloudTasksQueueHttpTargetOauthToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueHttpTargetOauthToken: googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.property.scope">scope</a></code> | <code>string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#service_account_email GoogleCloudTasksQueue#service_account_email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#scope GoogleCloudTasksQueue#scope}

---

### GoogleCloudTasksQueueHttpTargetOidcToken <a name="GoogleCloudTasksQueueHttpTargetOidcToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueHttpTargetOidcToken: googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OIDC token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.property.audience">audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email to be used for generating OIDC token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#service_account_email GoogleCloudTasksQueue#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#audience GoogleCloudTasksQueue#audience}

---

### GoogleCloudTasksQueueHttpTargetUriOverride <a name="GoogleCloudTasksQueueHttpTargetUriOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueHttpTargetUriOverride: googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.host">host</a></code> | <code>string</code> | Host override. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.pathOverride">pathOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | path_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.port">port</a></code> | <code>string</code> | Port override. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.queryOverride">queryOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | query_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.scheme">scheme</a></code> | <code>string</code> | Scheme override. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode">uriOverrideEnforceMode</a></code> | <code>string</code> | URI Override Enforce Mode. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host override.

When specified, replaces the host part of the task URL.
For example, if the task URL is "https://www.google.com", and host value
is set to "example.net", the overridden URI will be changed to "https://example.net".
Host value cannot be an empty string (INVALID_ARGUMENT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#host GoogleCloudTasksQueue#host}

---

##### `pathOverride`<sup>Optional</sup> <a name="pathOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.pathOverride"></a>

```typescript
public readonly pathOverride: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a>

path_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#path_override GoogleCloudTasksQueue#path_override}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Port override.

When specified, replaces the port part of the task URI.
For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
Note that the port value must be a positive integer.
Setting the port to 0 (Zero) clears the URI port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#port GoogleCloudTasksQueue#port}

---

##### `queryOverride`<sup>Optional</sup> <a name="queryOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.queryOverride"></a>

```typescript
public readonly queryOverride: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

query_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#query_override GoogleCloudTasksQueue#query_override}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Scheme override.

When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#scheme GoogleCloudTasksQueue#scheme}

---

##### `uriOverrideEnforceMode`<sup>Optional</sup> <a name="uriOverrideEnforceMode" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode"></a>

```typescript
public readonly uriOverrideEnforceMode: string;
```

- *Type:* string

URI Override Enforce Mode.

When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#uri_override_enforce_mode GoogleCloudTasksQueue#uri_override_enforce_mode}

---

### GoogleCloudTasksQueueHttpTargetUriOverridePathOverride <a name="GoogleCloudTasksQueueHttpTargetUriOverridePathOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueHttpTargetUriOverridePathOverride: googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride.property.path">path</a></code> | <code>string</code> | The URI path (e.g., /users/1234). Default is an empty string. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The URI path (e.g., /users/1234). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#path GoogleCloudTasksQueue#path}

---

### GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride <a name="GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueHttpTargetUriOverrideQueryOverride: googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams">queryParams</a></code> | <code>string</code> | The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string. |

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams"></a>

```typescript
public readonly queryParams: string;
```

- *Type:* string

The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#query_params GoogleCloudTasksQueue#query_params}

---

### GoogleCloudTasksQueueRateLimits <a name="GoogleCloudTasksQueueRateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueRateLimits: googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxConcurrentDispatches">maxConcurrentDispatches</a></code> | <code>number</code> | The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxDispatchesPerSecond">maxDispatchesPerSecond</a></code> | <code>number</code> | The maximum rate at which tasks are dispatched from this queue. |

---

##### `maxConcurrentDispatches`<sup>Optional</sup> <a name="maxConcurrentDispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxConcurrentDispatches"></a>

```typescript
public readonly maxConcurrentDispatches: number;
```

- *Type:* number

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#max_concurrent_dispatches GoogleCloudTasksQueue#max_concurrent_dispatches}

---

##### `maxDispatchesPerSecond`<sup>Optional</sup> <a name="maxDispatchesPerSecond" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxDispatchesPerSecond"></a>

```typescript
public readonly maxDispatchesPerSecond: number;
```

- *Type:* number

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#max_dispatches_per_second GoogleCloudTasksQueue#max_dispatches_per_second}

---

### GoogleCloudTasksQueueRetryConfig <a name="GoogleCloudTasksQueueRetryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueRetryConfig: googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Number of attempts per task. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxBackoff">maxBackoff</a></code> | <code>string</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxDoublings">maxDoublings</a></code> | <code>number</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxRetryDuration">maxRetryDuration</a></code> | <code>string</code> | If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.minBackoff">minBackoff</a></code> | <code>string</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#max_attempts GoogleCloudTasksQueue#max_attempts}

---

##### `maxBackoff`<sup>Optional</sup> <a name="maxBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxBackoff"></a>

```typescript
public readonly maxBackoff: string;
```

- *Type:* string

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#max_backoff GoogleCloudTasksQueue#max_backoff}

---

##### `maxDoublings`<sup>Optional</sup> <a name="maxDoublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxDoublings"></a>

```typescript
public readonly maxDoublings: number;
```

- *Type:* number

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#max_doublings GoogleCloudTasksQueue#max_doublings}

---

##### `maxRetryDuration`<sup>Optional</sup> <a name="maxRetryDuration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxRetryDuration"></a>

```typescript
public readonly maxRetryDuration: string;
```

- *Type:* string

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#max_retry_duration GoogleCloudTasksQueue#max_retry_duration}

---

##### `minBackoff`<sup>Optional</sup> <a name="minBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.minBackoff"></a>

```typescript
public readonly minBackoff: string;
```

- *Type:* string

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#min_backoff GoogleCloudTasksQueue#min_backoff}

---

### GoogleCloudTasksQueueStackdriverLoggingConfig <a name="GoogleCloudTasksQueueStackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueStackdriverLoggingConfig: googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.property.samplingRatio">samplingRatio</a></code> | <code>number</code> | Specifies the fraction of operations to write to Stackdriver Logging. |

---

##### `samplingRatio`<sup>Required</sup> <a name="samplingRatio" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.property.samplingRatio"></a>

```typescript
public readonly samplingRatio: number;
```

- *Type:* number

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#sampling_ratio GoogleCloudTasksQueue#sampling_ratio}

---

### GoogleCloudTasksQueueTimeouts <a name="GoogleCloudTasksQueueTimeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

const googleCloudTasksQueueTimeouts: googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#create GoogleCloudTasksQueue#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#delete GoogleCloudTasksQueue#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#update GoogleCloudTasksQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#create GoogleCloudTasksQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#delete GoogleCloudTasksQueue#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_tasks_queue#update GoogleCloudTasksQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference <a name="GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance"></a>

```typescript
public resetInstance(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueAppEngineRoutingOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

---


### GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference <a name="GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


### GoogleCloudTasksQueueHttpTargetHeaderOverridesList <a name="GoogleCloudTasksQueueHttpTargetHeaderOverridesList" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.get"></a>

```typescript
public get(index: number): GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudTasksQueueHttpTargetHeaderOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>[]

---


### GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference <a name="GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader">putHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader"></a>

```typescript
public putHeader(value: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput">headerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header"></a>

```typescript
public readonly header: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudTasksQueueHttpTargetHeaderOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>

---


### GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference <a name="GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a>

---


### GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference <a name="GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a>

---


### GoogleCloudTasksQueueHttpTargetOutputReference <a name="GoogleCloudTasksQueueHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putHeaderOverrides">putHeaderOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOauthToken">putOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride">putUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides">resetHeaderOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetUriOverride">resetUriOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderOverrides` <a name="putHeaderOverrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putHeaderOverrides"></a>

```typescript
public putHeaderOverrides(value: IResolvable | GoogleCloudTasksQueueHttpTargetHeaderOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putHeaderOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>[]

---

##### `putOauthToken` <a name="putOauthToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOauthToken"></a>

```typescript
public putOauthToken(value: GoogleCloudTasksQueueHttpTargetOauthToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOidcToken"></a>

```typescript
public putOidcToken(value: GoogleCloudTasksQueueHttpTargetOidcToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a>

---

##### `putUriOverride` <a name="putUriOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride"></a>

```typescript
public putUriOverride(value: GoogleCloudTasksQueueHttpTargetUriOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a>

---

##### `resetHeaderOverrides` <a name="resetHeaderOverrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides"></a>

```typescript
public resetHeaderOverrides(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetOauthToken"></a>

```typescript
public resetOauthToken(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```

##### `resetUriOverride` <a name="resetUriOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetUriOverride"></a>

```typescript
public resetUriOverride(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.headerOverrides">headerOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList">GoogleCloudTasksQueueHttpTargetHeaderOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference">GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference">GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.uriOverride">uriOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput">headerOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput">uriOverrideInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerOverrides`<sup>Required</sup> <a name="headerOverrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.headerOverrides"></a>

```typescript
public readonly headerOverrides: GoogleCloudTasksQueueHttpTargetHeaderOverridesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList">GoogleCloudTasksQueueHttpTargetHeaderOverridesList</a>

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oauthToken"></a>

```typescript
public readonly oauthToken: GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference">GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oidcToken"></a>

```typescript
public readonly oidcToken: GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference">GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference</a>

---

##### `uriOverride`<sup>Required</sup> <a name="uriOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.uriOverride"></a>

```typescript
public readonly uriOverride: GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference</a>

---

##### `headerOverridesInput`<sup>Optional</sup> <a name="headerOverridesInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput"></a>

```typescript
public readonly headerOverridesInput: IResolvable | GoogleCloudTasksQueueHttpTargetHeaderOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>[]

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: GoogleCloudTasksQueueHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: GoogleCloudTasksQueueHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a>

---

##### `uriOverrideInput`<sup>Optional</sup> <a name="uriOverrideInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput"></a>

```typescript
public readonly uriOverrideInput: GoogleCloudTasksQueueHttpTargetUriOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a>

---


### GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference <a name="GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride">putPathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride">putQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride">resetPathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride">resetQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode">resetUriOverrideEnforceMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPathOverride` <a name="putPathOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride"></a>

```typescript
public putPathOverride(value: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `putQueryOverride` <a name="putQueryOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride"></a>

```typescript
public putQueryOverride(value: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPathOverride` <a name="resetPathOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride"></a>

```typescript
public resetPathOverride(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetQueryOverride` <a name="resetQueryOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride"></a>

```typescript
public resetQueryOverride(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```

##### `resetUriOverrideEnforceMode` <a name="resetUriOverrideEnforceMode" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode"></a>

```typescript
public resetUriOverrideEnforceMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride">pathOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride">queryOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput">pathOverrideInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput">queryOverrideInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput">uriOverrideEnforceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode">uriOverrideEnforceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathOverride`<sup>Required</sup> <a name="pathOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride"></a>

```typescript
public readonly pathOverride: GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a>

---

##### `queryOverride`<sup>Required</sup> <a name="queryOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride"></a>

```typescript
public readonly queryOverride: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathOverrideInput`<sup>Optional</sup> <a name="pathOverrideInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput"></a>

```typescript
public readonly pathOverrideInput: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `queryOverrideInput`<sup>Optional</sup> <a name="queryOverrideInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput"></a>

```typescript
public readonly queryOverrideInput: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `uriOverrideEnforceModeInput`<sup>Optional</sup> <a name="uriOverrideEnforceModeInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput"></a>

```typescript
public readonly uriOverrideEnforceModeInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `uriOverrideEnforceMode`<sup>Required</sup> <a name="uriOverrideEnforceMode" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode"></a>

```typescript
public readonly uriOverrideEnforceMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueHttpTargetUriOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a>

---


### GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference <a name="GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a>

---


### GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference <a name="GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams"></a>

```typescript
public resetQueryParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams">queryParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput"></a>

```typescript
public readonly queryParamsInput: string;
```

- *Type:* string

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams"></a>

```typescript
public readonly queryParams: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---


### GoogleCloudTasksQueueRateLimitsOutputReference <a name="GoogleCloudTasksQueueRateLimitsOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches">resetMaxConcurrentDispatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond">resetMaxDispatchesPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentDispatches` <a name="resetMaxConcurrentDispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches"></a>

```typescript
public resetMaxConcurrentDispatches(): void
```

##### `resetMaxDispatchesPerSecond` <a name="resetMaxDispatchesPerSecond" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond"></a>

```typescript
public resetMaxDispatchesPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxBurstSize">maxBurstSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput">maxConcurrentDispatchesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput">maxDispatchesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches">maxConcurrentDispatches</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond">maxDispatchesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBurstSize`<sup>Required</sup> <a name="maxBurstSize" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxBurstSize"></a>

```typescript
public readonly maxBurstSize: number;
```

- *Type:* number

---

##### `maxConcurrentDispatchesInput`<sup>Optional</sup> <a name="maxConcurrentDispatchesInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput"></a>

```typescript
public readonly maxConcurrentDispatchesInput: number;
```

- *Type:* number

---

##### `maxDispatchesPerSecondInput`<sup>Optional</sup> <a name="maxDispatchesPerSecondInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput"></a>

```typescript
public readonly maxDispatchesPerSecondInput: number;
```

- *Type:* number

---

##### `maxConcurrentDispatches`<sup>Required</sup> <a name="maxConcurrentDispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches"></a>

```typescript
public readonly maxConcurrentDispatches: number;
```

- *Type:* number

---

##### `maxDispatchesPerSecond`<sup>Required</sup> <a name="maxDispatchesPerSecond" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond"></a>

```typescript
public readonly maxDispatchesPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueRateLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

---


### GoogleCloudTasksQueueRetryConfigOutputReference <a name="GoogleCloudTasksQueueRetryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxAttempts">resetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxBackoff">resetMaxBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxDoublings">resetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration">resetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMinBackoff">resetMinBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAttempts` <a name="resetMaxAttempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxAttempts"></a>

```typescript
public resetMaxAttempts(): void
```

##### `resetMaxBackoff` <a name="resetMaxBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxBackoff"></a>

```typescript
public resetMaxBackoff(): void
```

##### `resetMaxDoublings` <a name="resetMaxDoublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxDoublings"></a>

```typescript
public resetMaxDoublings(): void
```

##### `resetMaxRetryDuration` <a name="resetMaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration"></a>

```typescript
public resetMaxRetryDuration(): void
```

##### `resetMinBackoff` <a name="resetMinBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMinBackoff"></a>

```typescript
public resetMinBackoff(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput">maxBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput">maxDoublingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput">maxRetryDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoffInput">minBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoff">maxBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublings">maxDoublings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration">maxRetryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoff">minBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `maxBackoffInput`<sup>Optional</sup> <a name="maxBackoffInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput"></a>

```typescript
public readonly maxBackoffInput: string;
```

- *Type:* string

---

##### `maxDoublingsInput`<sup>Optional</sup> <a name="maxDoublingsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput"></a>

```typescript
public readonly maxDoublingsInput: number;
```

- *Type:* number

---

##### `maxRetryDurationInput`<sup>Optional</sup> <a name="maxRetryDurationInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```typescript
public readonly maxRetryDurationInput: string;
```

- *Type:* string

---

##### `minBackoffInput`<sup>Optional</sup> <a name="minBackoffInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoffInput"></a>

```typescript
public readonly minBackoffInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `maxBackoff`<sup>Required</sup> <a name="maxBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoff"></a>

```typescript
public readonly maxBackoff: string;
```

- *Type:* string

---

##### `maxDoublings`<sup>Required</sup> <a name="maxDoublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublings"></a>

```typescript
public readonly maxDoublings: number;
```

- *Type:* number

---

##### `maxRetryDuration`<sup>Required</sup> <a name="maxRetryDuration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration"></a>

```typescript
public readonly maxRetryDuration: string;
```

- *Type:* string

---

##### `minBackoff`<sup>Required</sup> <a name="minBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoff"></a>

```typescript
public readonly minBackoff: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

---


### GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference <a name="GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput">samplingRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio">samplingRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingRatioInput`<sup>Optional</sup> <a name="samplingRatioInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput"></a>

```typescript
public readonly samplingRatioInput: number;
```

- *Type:* number

---

##### `samplingRatio`<sup>Required</sup> <a name="samplingRatio" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio"></a>

```typescript
public readonly samplingRatio: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudTasksQueueStackdriverLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

---


### GoogleCloudTasksQueueTimeoutsOutputReference <a name="GoogleCloudTasksQueueTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudTasksQueue } from '@cdktf/provider-google-beta'

new googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudTasksQueueTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

---



