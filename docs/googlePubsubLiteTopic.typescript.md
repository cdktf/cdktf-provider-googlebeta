# `googlePubsubLiteTopic` Submodule <a name="`googlePubsubLiteTopic` Submodule" id="@cdktf/provider-google-beta.googlePubsubLiteTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubLiteTopic <a name="GooglePubsubLiteTopic" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic google_pubsub_lite_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

new googlePubsubLiteTopic.GooglePubsubLiteTopic(scope: Construct, id: string, config: GooglePubsubLiteTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig">GooglePubsubLiteTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig">GooglePubsubLiteTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig">putPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig">putReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig">putRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetPartitionConfig">resetPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetReservationConfig">resetReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRetentionConfig">resetRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionConfig` <a name="putPartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig"></a>

```typescript
public putPartitionConfig(value: GooglePubsubLiteTopicPartitionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

---

##### `putReservationConfig` <a name="putReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig"></a>

```typescript
public putReservationConfig(value: GooglePubsubLiteTopicReservationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

---

##### `putRetentionConfig` <a name="putRetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig"></a>

```typescript
public putRetentionConfig(value: GooglePubsubLiteTopicRetentionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: GooglePubsubLiteTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPartitionConfig` <a name="resetPartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetPartitionConfig"></a>

```typescript
public resetPartitionConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReservationConfig` <a name="resetReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetReservationConfig"></a>

```typescript
public resetReservationConfig(): void
```

##### `resetRetentionConfig` <a name="resetRetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRetentionConfig"></a>

```typescript
public resetRetentionConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePubsubLiteTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GooglePubsubLiteTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePubsubLiteTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePubsubLiteTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubLiteTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfig">partitionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference">GooglePubsubLiteTopicPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfig">reservationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference">GooglePubsubLiteTopicReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfig">retentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference">GooglePubsubLiteTopicRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference">GooglePubsubLiteTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfigInput">partitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfigInput">reservationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfigInput">retentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `partitionConfig`<sup>Required</sup> <a name="partitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfig"></a>

```typescript
public readonly partitionConfig: GooglePubsubLiteTopicPartitionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference">GooglePubsubLiteTopicPartitionConfigOutputReference</a>

---

##### `reservationConfig`<sup>Required</sup> <a name="reservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfig"></a>

```typescript
public readonly reservationConfig: GooglePubsubLiteTopicReservationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference">GooglePubsubLiteTopicReservationConfigOutputReference</a>

---

##### `retentionConfig`<sup>Required</sup> <a name="retentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfig"></a>

```typescript
public readonly retentionConfig: GooglePubsubLiteTopicRetentionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference">GooglePubsubLiteTopicRetentionConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePubsubLiteTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference">GooglePubsubLiteTopicTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionConfigInput`<sup>Optional</sup> <a name="partitionConfigInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfigInput"></a>

```typescript
public readonly partitionConfigInput: GooglePubsubLiteTopicPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservationConfigInput`<sup>Optional</sup> <a name="reservationConfigInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfigInput"></a>

```typescript
public readonly reservationConfigInput: GooglePubsubLiteTopicReservationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

---

##### `retentionConfigInput`<sup>Optional</sup> <a name="retentionConfigInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfigInput"></a>

```typescript
public readonly retentionConfigInput: GooglePubsubLiteTopicRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GooglePubsubLiteTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubLiteTopicConfig <a name="GooglePubsubLiteTopicConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

const googlePubsubLiteTopicConfig: googlePubsubLiteTopic.GooglePubsubLiteTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.name">name</a></code> | <code>string</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.partitionConfig">partitionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | partition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.region">region</a></code> | <code>string</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.reservationConfig">reservationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | reservation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.retentionConfig">retentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.zone">zone</a></code> | <code>string</code> | The zone of the pubsub lite topic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#name GooglePubsubLiteTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionConfig`<sup>Optional</sup> <a name="partitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.partitionConfig"></a>

```typescript
public readonly partitionConfig: GooglePubsubLiteTopicPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#partition_config GooglePubsubLiteTopic#partition_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#region GooglePubsubLiteTopic#region}

---

##### `reservationConfig`<sup>Optional</sup> <a name="reservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.reservationConfig"></a>

```typescript
public readonly reservationConfig: GooglePubsubLiteTopicReservationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

reservation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#reservation_config GooglePubsubLiteTopic#reservation_config}

---

##### `retentionConfig`<sup>Optional</sup> <a name="retentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.retentionConfig"></a>

```typescript
public readonly retentionConfig: GooglePubsubLiteTopicRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#retention_config GooglePubsubLiteTopic#retention_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePubsubLiteTopicTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#timeouts GooglePubsubLiteTopic#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#zone GooglePubsubLiteTopic#zone}

---

### GooglePubsubLiteTopicPartitionConfig <a name="GooglePubsubLiteTopicPartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

const googlePubsubLiteTopicPartitionConfig: googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.count">count</a></code> | <code>number</code> | The number of partitions in the topic. Must be at least 1. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | capacity block. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of partitions in the topic. Must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#count GooglePubsubLiteTopic#count}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.capacity"></a>

```typescript
public readonly capacity: GooglePubsubLiteTopicPartitionConfigCapacity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#capacity GooglePubsubLiteTopic#capacity}

---

### GooglePubsubLiteTopicPartitionConfigCapacity <a name="GooglePubsubLiteTopicPartitionConfigCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

const googlePubsubLiteTopicPartitionConfigCapacity: googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec">publishMibPerSec</a></code> | <code>number</code> | Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec">subscribeMibPerSec</a></code> | <code>number</code> | Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |

---

##### `publishMibPerSec`<sup>Required</sup> <a name="publishMibPerSec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec"></a>

```typescript
public readonly publishMibPerSec: number;
```

- *Type:* number

Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#publish_mib_per_sec GooglePubsubLiteTopic#publish_mib_per_sec}

---

##### `subscribeMibPerSec`<sup>Required</sup> <a name="subscribeMibPerSec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec"></a>

```typescript
public readonly subscribeMibPerSec: number;
```

- *Type:* number

Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#subscribe_mib_per_sec GooglePubsubLiteTopic#subscribe_mib_per_sec}

---

### GooglePubsubLiteTopicReservationConfig <a name="GooglePubsubLiteTopicReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

const googlePubsubLiteTopicReservationConfig: googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.property.throughputReservation">throughputReservation</a></code> | <code>string</code> | The Reservation to use for this topic's throughput capacity. |

---

##### `throughputReservation`<sup>Optional</sup> <a name="throughputReservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.property.throughputReservation"></a>

```typescript
public readonly throughputReservation: string;
```

- *Type:* string

The Reservation to use for this topic's throughput capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#throughput_reservation GooglePubsubLiteTopic#throughput_reservation}

---

### GooglePubsubLiteTopicRetentionConfig <a name="GooglePubsubLiteTopicRetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

const googlePubsubLiteTopicRetentionConfig: googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.perPartitionBytes">perPartitionBytes</a></code> | <code>string</code> | The provisioned storage, in bytes, per partition. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.period">period</a></code> | <code>string</code> | How long a published message is retained. |

---

##### `perPartitionBytes`<sup>Required</sup> <a name="perPartitionBytes" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.perPartitionBytes"></a>

```typescript
public readonly perPartitionBytes: string;
```

- *Type:* string

The provisioned storage, in bytes, per partition.

If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#per_partition_bytes GooglePubsubLiteTopic#per_partition_bytes}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

How long a published message is retained.

If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#period GooglePubsubLiteTopic#period}

---

### GooglePubsubLiteTopicTimeouts <a name="GooglePubsubLiteTopicTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

const googlePubsubLiteTopicTimeouts: googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#create GooglePubsubLiteTopic#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#delete GooglePubsubLiteTopic#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#update GooglePubsubLiteTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#create GooglePubsubLiteTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#delete GooglePubsubLiteTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_pubsub_lite_topic#update GooglePubsubLiteTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubLiteTopicPartitionConfigCapacityOutputReference <a name="GooglePubsubLiteTopicPartitionConfigCapacityOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

new googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput">publishMibPerSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput">subscribeMibPerSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec">publishMibPerSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec">subscribeMibPerSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publishMibPerSecInput`<sup>Optional</sup> <a name="publishMibPerSecInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput"></a>

```typescript
public readonly publishMibPerSecInput: number;
```

- *Type:* number

---

##### `subscribeMibPerSecInput`<sup>Optional</sup> <a name="subscribeMibPerSecInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput"></a>

```typescript
public readonly subscribeMibPerSecInput: number;
```

- *Type:* number

---

##### `publishMibPerSec`<sup>Required</sup> <a name="publishMibPerSec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec"></a>

```typescript
public readonly publishMibPerSec: number;
```

- *Type:* number

---

##### `subscribeMibPerSec`<sup>Required</sup> <a name="subscribeMibPerSec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec"></a>

```typescript
public readonly subscribeMibPerSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubLiteTopicPartitionConfigCapacity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

---


### GooglePubsubLiteTopicPartitionConfigOutputReference <a name="GooglePubsubLiteTopicPartitionConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

new googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacity` <a name="putCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity"></a>

```typescript
public putCapacity(value: GooglePubsubLiteTopicPartitionConfigCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resetCapacity"></a>

```typescript
public resetCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference">GooglePubsubLiteTopicPartitionConfigCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacityInput">capacityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacity"></a>

```typescript
public readonly capacity: GooglePubsubLiteTopicPartitionConfigCapacityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference">GooglePubsubLiteTopicPartitionConfigCapacityOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: GooglePubsubLiteTopicPartitionConfigCapacity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubLiteTopicPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

---


### GooglePubsubLiteTopicReservationConfigOutputReference <a name="GooglePubsubLiteTopicReservationConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

new googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation">resetThroughputReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThroughputReservation` <a name="resetThroughputReservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation"></a>

```typescript
public resetThroughputReservation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput">throughputReservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservation">throughputReservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `throughputReservationInput`<sup>Optional</sup> <a name="throughputReservationInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput"></a>

```typescript
public readonly throughputReservationInput: string;
```

- *Type:* string

---

##### `throughputReservation`<sup>Required</sup> <a name="throughputReservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservation"></a>

```typescript
public readonly throughputReservation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubLiteTopicReservationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

---


### GooglePubsubLiteTopicRetentionConfigOutputReference <a name="GooglePubsubLiteTopicRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

new googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput">perPartitionBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes">perPartitionBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `perPartitionBytesInput`<sup>Optional</sup> <a name="perPartitionBytesInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput"></a>

```typescript
public readonly perPartitionBytesInput: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `perPartitionBytes`<sup>Required</sup> <a name="perPartitionBytes" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes"></a>

```typescript
public readonly perPartitionBytes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubLiteTopicRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

---


### GooglePubsubLiteTopicTimeoutsOutputReference <a name="GooglePubsubLiteTopicTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { googlePubsubLiteTopic } from '@cdktf/provider-google-beta'

new googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GooglePubsubLiteTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>

---



