# `googlePubsubSubscription` Submodule <a name="`googlePubsubSubscription` Submodule" id="@cdktf/provider-google-beta.googlePubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubSubscription <a name="GooglePubsubSubscription" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscription(scope: Construct, id: string, config: GooglePubsubSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig">GooglePubsubSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig">GooglePubsubSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig">putBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig">putCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy">putDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy">putExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig">putPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetAckDeadlineSeconds">resetAckDeadlineSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetBigqueryConfig">resetBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetCloudStorageConfig">resetCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetDeadLetterPolicy">resetDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableExactlyOnceDelivery">resetEnableExactlyOnceDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableMessageOrdering">resetEnableMessageOrdering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetExpirationPolicy">resetExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetMessageRetentionDuration">resetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetPushConfig">resetPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetainAckedMessages">resetRetainAckedMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryConfig` <a name="putBigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig"></a>

```typescript
public putBigqueryConfig(value: GooglePubsubSubscriptionBigqueryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---

##### `putCloudStorageConfig` <a name="putCloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig"></a>

```typescript
public putCloudStorageConfig(value: GooglePubsubSubscriptionCloudStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---

##### `putDeadLetterPolicy` <a name="putDeadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy"></a>

```typescript
public putDeadLetterPolicy(value: GooglePubsubSubscriptionDeadLetterPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---

##### `putExpirationPolicy` <a name="putExpirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy"></a>

```typescript
public putExpirationPolicy(value: GooglePubsubSubscriptionExpirationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---

##### `putPushConfig` <a name="putPushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig"></a>

```typescript
public putPushConfig(value: GooglePubsubSubscriptionPushConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: GooglePubsubSubscriptionRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: GooglePubsubSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

---

##### `resetAckDeadlineSeconds` <a name="resetAckDeadlineSeconds" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetAckDeadlineSeconds"></a>

```typescript
public resetAckDeadlineSeconds(): void
```

##### `resetBigqueryConfig` <a name="resetBigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetBigqueryConfig"></a>

```typescript
public resetBigqueryConfig(): void
```

##### `resetCloudStorageConfig` <a name="resetCloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetCloudStorageConfig"></a>

```typescript
public resetCloudStorageConfig(): void
```

##### `resetDeadLetterPolicy` <a name="resetDeadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetDeadLetterPolicy"></a>

```typescript
public resetDeadLetterPolicy(): void
```

##### `resetEnableExactlyOnceDelivery` <a name="resetEnableExactlyOnceDelivery" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableExactlyOnceDelivery"></a>

```typescript
public resetEnableExactlyOnceDelivery(): void
```

##### `resetEnableMessageOrdering` <a name="resetEnableMessageOrdering" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableMessageOrdering"></a>

```typescript
public resetEnableMessageOrdering(): void
```

##### `resetExpirationPolicy` <a name="resetExpirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetExpirationPolicy"></a>

```typescript
public resetExpirationPolicy(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMessageRetentionDuration` <a name="resetMessageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetMessageRetentionDuration"></a>

```typescript
public resetMessageRetentionDuration(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPushConfig` <a name="resetPushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetPushConfig"></a>

```typescript
public resetPushConfig(): void
```

##### `resetRetainAckedMessages` <a name="resetRetainAckedMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetainAckedMessages"></a>

```typescript
public resetRetainAckedMessages(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePubsubSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

googlePubsubSubscription.GooglePubsubSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GooglePubsubSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePubsubSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePubsubSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference">GooglePubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference">GooglePubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference">GooglePubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference">GooglePubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference">GooglePubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference">GooglePubsubSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSecondsInput">ackDeadlineSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfigInput">bigqueryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfigInput">cloudStorageConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicyInput">deadLetterPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDeliveryInput">enableExactlyOnceDeliveryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrderingInput">enableMessageOrderingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicyInput">expirationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDurationInput">messageRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfigInput">pushConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessagesInput">retainAckedMessagesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessages">retainAckedMessages</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topic">topic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryConfig`<sup>Required</sup> <a name="bigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfig"></a>

```typescript
public readonly bigqueryConfig: GooglePubsubSubscriptionBigqueryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference">GooglePubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `cloudStorageConfig`<sup>Required</sup> <a name="cloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfig"></a>

```typescript
public readonly cloudStorageConfig: GooglePubsubSubscriptionCloudStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `deadLetterPolicy`<sup>Required</sup> <a name="deadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicy"></a>

```typescript
public readonly deadLetterPolicy: GooglePubsubSubscriptionDeadLetterPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference">GooglePubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `expirationPolicy`<sup>Required</sup> <a name="expirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicy"></a>

```typescript
public readonly expirationPolicy: GooglePubsubSubscriptionExpirationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference">GooglePubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `pushConfig`<sup>Required</sup> <a name="pushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfig"></a>

```typescript
public readonly pushConfig: GooglePubsubSubscriptionPushConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference">GooglePubsubSubscriptionPushConfigOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: GooglePubsubSubscriptionRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference">GooglePubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePubsubSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference">GooglePubsubSubscriptionTimeoutsOutputReference</a>

---

##### `ackDeadlineSecondsInput`<sup>Optional</sup> <a name="ackDeadlineSecondsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSecondsInput"></a>

```typescript
public readonly ackDeadlineSecondsInput: number;
```

- *Type:* number

---

##### `bigqueryConfigInput`<sup>Optional</sup> <a name="bigqueryConfigInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfigInput"></a>

```typescript
public readonly bigqueryConfigInput: GooglePubsubSubscriptionBigqueryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---

##### `cloudStorageConfigInput`<sup>Optional</sup> <a name="cloudStorageConfigInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfigInput"></a>

```typescript
public readonly cloudStorageConfigInput: GooglePubsubSubscriptionCloudStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---

##### `deadLetterPolicyInput`<sup>Optional</sup> <a name="deadLetterPolicyInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicyInput"></a>

```typescript
public readonly deadLetterPolicyInput: GooglePubsubSubscriptionDeadLetterPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---

##### `enableExactlyOnceDeliveryInput`<sup>Optional</sup> <a name="enableExactlyOnceDeliveryInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDeliveryInput"></a>

```typescript
public readonly enableExactlyOnceDeliveryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMessageOrderingInput`<sup>Optional</sup> <a name="enableMessageOrderingInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrderingInput"></a>

```typescript
public readonly enableMessageOrderingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationPolicyInput`<sup>Optional</sup> <a name="expirationPolicyInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicyInput"></a>

```typescript
public readonly expirationPolicyInput: GooglePubsubSubscriptionExpirationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDurationInput`<sup>Optional</sup> <a name="messageRetentionDurationInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDurationInput"></a>

```typescript
public readonly messageRetentionDurationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pushConfigInput`<sup>Optional</sup> <a name="pushConfigInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfigInput"></a>

```typescript
public readonly pushConfigInput: GooglePubsubSubscriptionPushConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---

##### `retainAckedMessagesInput`<sup>Optional</sup> <a name="retainAckedMessagesInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessagesInput"></a>

```typescript
public readonly retainAckedMessagesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: GooglePubsubSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GooglePubsubSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `ackDeadlineSeconds`<sup>Required</sup> <a name="ackDeadlineSeconds" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSeconds"></a>

```typescript
public readonly ackDeadlineSeconds: number;
```

- *Type:* number

---

##### `enableExactlyOnceDelivery`<sup>Required</sup> <a name="enableExactlyOnceDelivery" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDelivery"></a>

```typescript
public readonly enableExactlyOnceDelivery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMessageOrdering`<sup>Required</sup> <a name="enableMessageOrdering" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrdering"></a>

```typescript
public readonly enableMessageOrdering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `retainAckedMessages`<sup>Required</sup> <a name="retainAckedMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessages"></a>

```typescript
public readonly retainAckedMessages: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubSubscriptionBigqueryConfig <a name="GooglePubsubSubscriptionBigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionBigqueryConfig: googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.table">table</a></code> | <code>string</code> | The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.dropUnknownFields">dropUnknownFields</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The service account to use to write to BigQuery. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTableSchema">useTableSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTopicSchema">useTopicSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table. |

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#table GooglePubsubSubscription#table}

---

##### `dropUnknownFields`<sup>Optional</sup> <a name="dropUnknownFields" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```typescript
public readonly dropUnknownFields: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#drop_unknown_fields GooglePubsubSubscription#drop_unknown_fields}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The service account to use to write to BigQuery. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

##### `useTableSchema`<sup>Optional</sup> <a name="useTableSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```typescript
public readonly useTableSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#use_table_schema GooglePubsubSubscription#use_table_schema}

---

##### `useTopicSchema`<sup>Optional</sup> <a name="useTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```typescript
public readonly useTopicSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#use_topic_schema GooglePubsubSubscription#use_topic_schema}

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.

The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionCloudStorageConfig <a name="GooglePubsubSubscriptionCloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionCloudStorageConfig: googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.bucket">bucket</a></code> | <code>string</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.avroConfig">avroConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">filenameDatetimeFormat</a></code> | <code>string</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenamePrefix">filenamePrefix</a></code> | <code>string</code> | User-provided prefix for Cloud Storage filename. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameSuffix">filenameSuffix</a></code> | <code>string</code> | User-provided suffix for Cloud Storage filename. Must not end in "/". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxBytes">maxBytes</a></code> | <code>number</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxDuration">maxDuration</a></code> | <code>string</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxMessages">maxMessages</a></code> | <code>number</code> | The maximum messages that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The service account to use to write to Cloud Storage. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user. The bucket name must be without any prefix like "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#bucket GooglePubsubSubscription#bucket}

---

##### `avroConfig`<sup>Optional</sup> <a name="avroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```typescript
public readonly avroConfig: GooglePubsubSubscriptionCloudStorageConfigAvroConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#avro_config GooglePubsubSubscription#avro_config}

---

##### `filenameDatetimeFormat`<sup>Optional</sup> <a name="filenameDatetimeFormat" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```typescript
public readonly filenameDatetimeFormat: string;
```

- *Type:* string

User-provided format string specifying how to represent datetimes in Cloud Storage filenames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#filename_datetime_format GooglePubsubSubscription#filename_datetime_format}

---

##### `filenamePrefix`<sup>Optional</sup> <a name="filenamePrefix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```typescript
public readonly filenamePrefix: string;
```

- *Type:* string

User-provided prefix for Cloud Storage filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#filename_prefix GooglePubsubSubscription#filename_prefix}

---

##### `filenameSuffix`<sup>Optional</sup> <a name="filenameSuffix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```typescript
public readonly filenameSuffix: string;
```

- *Type:* string

User-provided suffix for Cloud Storage filename. Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#filename_suffix GooglePubsubSubscription#filename_suffix}

---

##### `maxBytes`<sup>Optional</sup> <a name="maxBytes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```typescript
public readonly maxBytes: number;
```

- *Type:* number

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#max_bytes GooglePubsubSubscription#max_bytes}

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```typescript
public readonly maxDuration: string;
```

- *Type:* string

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#max_duration GooglePubsubSubscription#max_duration}

---

##### `maxMessages`<sup>Optional</sup> <a name="maxMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxMessages"></a>

```typescript
public readonly maxMessages: number;
```

- *Type:* number

The maximum messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#max_messages GooglePubsubSubscription#max_messages}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The service account to use to write to Cloud Storage. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

### GooglePubsubSubscriptionCloudStorageConfigAvroConfig <a name="GooglePubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionCloudStorageConfigAvroConfig: googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema">useTopicSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, the output Cloud Storage file will be serialized using the topic schema, if it exists. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output. |

---

##### `useTopicSchema`<sup>Optional</sup> <a name="useTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema"></a>

```typescript
public readonly useTopicSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#use_topic_schema GooglePubsubSubscription#use_topic_schema}

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionConfig <a name="GooglePubsubSubscriptionConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionConfig: googlePubsubSubscription.GooglePubsubSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.name">name</a></code> | <code>string</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.topic">topic</a></code> | <code>string</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>number</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>boolean \| cdktf.IResolvable</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>boolean \| cdktf.IResolvable</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.filter">filter</a></code> | <code>string</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retainAckedMessages">retainAckedMessages</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#name GooglePubsubSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#topic GooglePubsubSubscription#topic}

---

##### `ackDeadlineSeconds`<sup>Optional</sup> <a name="ackDeadlineSeconds" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.ackDeadlineSeconds"></a>

```typescript
public readonly ackDeadlineSeconds: number;
```

- *Type:* number

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#ack_deadline_seconds GooglePubsubSubscription#ack_deadline_seconds}

---

##### `bigqueryConfig`<sup>Optional</sup> <a name="bigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.bigqueryConfig"></a>

```typescript
public readonly bigqueryConfig: GooglePubsubSubscriptionBigqueryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#bigquery_config GooglePubsubSubscription#bigquery_config}

---

##### `cloudStorageConfig`<sup>Optional</sup> <a name="cloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.cloudStorageConfig"></a>

```typescript
public readonly cloudStorageConfig: GooglePubsubSubscriptionCloudStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#cloud_storage_config GooglePubsubSubscription#cloud_storage_config}

---

##### `deadLetterPolicy`<sup>Optional</sup> <a name="deadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.deadLetterPolicy"></a>

```typescript
public readonly deadLetterPolicy: GooglePubsubSubscriptionDeadLetterPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#dead_letter_policy GooglePubsubSubscription#dead_letter_policy}

---

##### `enableExactlyOnceDelivery`<sup>Optional</sup> <a name="enableExactlyOnceDelivery" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableExactlyOnceDelivery"></a>

```typescript
public readonly enableExactlyOnceDelivery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#enable_exactly_once_delivery GooglePubsubSubscription#enable_exactly_once_delivery}

---

##### `enableMessageOrdering`<sup>Optional</sup> <a name="enableMessageOrdering" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableMessageOrdering"></a>

```typescript
public readonly enableMessageOrdering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#enable_message_ordering GooglePubsubSubscription#enable_message_ordering}

---

##### `expirationPolicy`<sup>Optional</sup> <a name="expirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.expirationPolicy"></a>

```typescript
public readonly expirationPolicy: GooglePubsubSubscriptionExpirationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#expiration_policy GooglePubsubSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#filter GooglePubsubSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#labels GooglePubsubSubscription#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 31 days ('"2678400s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#message_retention_duration GooglePubsubSubscription#message_retention_duration}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}.

---

##### `pushConfig`<sup>Optional</sup> <a name="pushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.pushConfig"></a>

```typescript
public readonly pushConfig: GooglePubsubSubscriptionPushConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#push_config GooglePubsubSubscription#push_config}

---

##### `retainAckedMessages`<sup>Optional</sup> <a name="retainAckedMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retainAckedMessages"></a>

```typescript
public readonly retainAckedMessages: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#retain_acked_messages GooglePubsubSubscription#retain_acked_messages}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: GooglePubsubSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#retry_policy GooglePubsubSubscription#retry_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePubsubSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#timeouts GooglePubsubSubscription#timeouts}

---

### GooglePubsubSubscriptionDeadLetterPolicy <a name="GooglePubsubSubscriptionDeadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionDeadLetterPolicy: googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">deadLetterTopic</a></code> | <code>string</code> | The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>number</code> | The maximum number of delivery attempts for any message. The value must be between 5 and 100. |

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: string;
```

- *Type:* string

The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#dead_letter_topic GooglePubsubSubscription#dead_letter_topic}

---

##### `maxDeliveryAttempts`<sup>Optional</sup> <a name="maxDeliveryAttempts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```typescript
public readonly maxDeliveryAttempts: number;
```

- *Type:* number

The maximum number of delivery attempts for any message. The value must be between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#max_delivery_attempts GooglePubsubSubscription#max_delivery_attempts}

---

### GooglePubsubSubscriptionExpirationPolicy <a name="GooglePubsubSubscriptionExpirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionExpirationPolicy: googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.property.ttl">ttl</a></code> | <code>string</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Specifies the "time-to-live" duration for an associated resource.

The
resource expires if it is not active for a period of ttl.
If ttl is set to "", the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#ttl GooglePubsubSubscription#ttl}

---

### GooglePubsubSubscriptionPushConfig <a name="GooglePubsubSubscriptionPushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionPushConfig: googlePubsubSubscription.GooglePubsubSubscriptionPushConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.pushEndpoint">pushEndpoint</a></code> | <code>string</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Endpoint configuration attributes. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.noWrapper">noWrapper</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |

---

##### `pushEndpoint`<sup>Required</sup> <a name="pushEndpoint" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```typescript
public readonly pushEndpoint: string;
```

- *Type:* string

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#push_endpoint GooglePubsubSubscription#push_endpoint}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Endpoint configuration attributes.

Every endpoint has a set of API supported attributes that can
be used to control different aspects of the message delivery.

The currently supported attribute is x-goog-version, which you
can use to change the format of the pushed message. This
attribute indicates the version of the data expected by
the endpoint. This controls the shape of the pushed message
(i.e., its fields and metadata). The endpoint version is
based on the version of the Pub/Sub API.

If not present during the subscriptions.create call,
it will default to the version of the API used to make
such call. If not present during a subscriptions.modifyPushConfig
call, its value will not be changed. subscriptions.get
calls will always return a valid version, even if the
subscription was created without this attribute.

The possible values for this attribute are:

- v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
- v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#attributes GooglePubsubSubscription#attributes}

---

##### `noWrapper`<sup>Optional</sup> <a name="noWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.noWrapper"></a>

```typescript
public readonly noWrapper: GooglePubsubSubscriptionPushConfigNoWrapper;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#no_wrapper GooglePubsubSubscription#no_wrapper}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.oidcToken"></a>

```typescript
public readonly oidcToken: GooglePubsubSubscriptionPushConfigOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#oidc_token GooglePubsubSubscription#oidc_token}

---

### GooglePubsubSubscriptionPushConfigNoWrapper <a name="GooglePubsubSubscriptionPushConfigNoWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionPushConfigNoWrapper: googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the
Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionPushConfigOidcToken <a name="GooglePubsubSubscriptionPushConfigOidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionPushConfigOidcToken: googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating the OIDC token. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.audience">audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email to be used for generating the OIDC token.

The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience to be used when generating OIDC token.

The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#audience GooglePubsubSubscription#audience}

---

### GooglePubsubSubscriptionRetryPolicy <a name="GooglePubsubSubscriptionRetryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionRetryPolicy: googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.maximumBackoff">maximumBackoff</a></code> | <code>string</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.minimumBackoff">minimumBackoff</a></code> | <code>string</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `maximumBackoff`<sup>Optional</sup> <a name="maximumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```typescript
public readonly maximumBackoff: string;
```

- *Type:* string

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#maximum_backoff GooglePubsubSubscription#maximum_backoff}

---

##### `minimumBackoff`<sup>Optional</sup> <a name="minimumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```typescript
public readonly minimumBackoff: string;
```

- *Type:* string

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#minimum_backoff GooglePubsubSubscription#minimum_backoff}

---

### GooglePubsubSubscriptionTimeouts <a name="GooglePubsubSubscriptionTimeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

const googlePubsubSubscriptionTimeouts: googlePubsubSubscription.GooglePubsubSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#create GooglePubsubSubscription#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#delete GooglePubsubSubscription#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#update GooglePubsubSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#create GooglePubsubSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#delete GooglePubsubSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_pubsub_subscription#update GooglePubsubSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubSubscriptionBigqueryConfigOutputReference <a name="GooglePubsubSubscriptionBigqueryConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">resetDropUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">resetUseTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">resetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDropUnknownFields` <a name="resetDropUnknownFields" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```typescript
public resetDropUnknownFields(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetUseTableSchema` <a name="resetUseTableSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```typescript
public resetUseTableSchema(): void
```

##### `resetUseTopicSchema` <a name="resetUseTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```typescript
public resetUseTopicSchema(): void
```

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```typescript
public resetWriteMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">dropUnknownFieldsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">useTableSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">useTopicSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">dropUnknownFields</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">useTableSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dropUnknownFieldsInput`<sup>Optional</sup> <a name="dropUnknownFieldsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```typescript
public readonly dropUnknownFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `useTableSchemaInput`<sup>Optional</sup> <a name="useTableSchemaInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```typescript
public readonly useTableSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTopicSchemaInput`<sup>Optional</sup> <a name="useTopicSchemaInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```typescript
public readonly useTopicSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```typescript
public readonly writeMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dropUnknownFields`<sup>Required</sup> <a name="dropUnknownFields" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```typescript
public readonly dropUnknownFields: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `useTableSchema`<sup>Required</sup> <a name="useTableSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```typescript
public readonly useTableSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```typescript
public readonly useTopicSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionBigqueryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---


### GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema">resetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseTopicSchema` <a name="resetUseTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema"></a>

```typescript
public resetUseTopicSchema(): void
```

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```typescript
public resetWriteMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput">useTopicSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useTopicSchemaInput`<sup>Optional</sup> <a name="useTopicSchemaInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput"></a>

```typescript
public readonly useTopicSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```typescript
public readonly writeMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```typescript
public readonly useTopicSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionCloudStorageConfigAvroConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### GooglePubsubSubscriptionCloudStorageConfigOutputReference <a name="GooglePubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">putAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">resetAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">resetFilenameDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">resetFilenamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">resetFilenameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">resetMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">resetMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages">resetMaxMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvroConfig` <a name="putAvroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```typescript
public putAvroConfig(value: GooglePubsubSubscriptionCloudStorageConfigAvroConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `resetAvroConfig` <a name="resetAvroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```typescript
public resetAvroConfig(): void
```

##### `resetFilenameDatetimeFormat` <a name="resetFilenameDatetimeFormat" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```typescript
public resetFilenameDatetimeFormat(): void
```

##### `resetFilenamePrefix` <a name="resetFilenamePrefix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```typescript
public resetFilenamePrefix(): void
```

##### `resetFilenameSuffix` <a name="resetFilenameSuffix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```typescript
public resetFilenameSuffix(): void
```

##### `resetMaxBytes` <a name="resetMaxBytes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```typescript
public resetMaxBytes(): void
```

##### `resetMaxDuration` <a name="resetMaxDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```typescript
public resetMaxDuration(): void
```

##### `resetMaxMessages` <a name="resetMaxMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages"></a>

```typescript
public resetMaxMessages(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">avroConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">avroConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">filenameDatetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">filenamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">filenameSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">maxBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">maxDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput">maxMessagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">filenameDatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">filenamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">filenameSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">maxBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">maxDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">maxMessages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avroConfig`<sup>Required</sup> <a name="avroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```typescript
public readonly avroConfig: GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `avroConfigInput`<sup>Optional</sup> <a name="avroConfigInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```typescript
public readonly avroConfigInput: GooglePubsubSubscriptionCloudStorageConfigAvroConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `filenameDatetimeFormatInput`<sup>Optional</sup> <a name="filenameDatetimeFormatInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```typescript
public readonly filenameDatetimeFormatInput: string;
```

- *Type:* string

---

##### `filenamePrefixInput`<sup>Optional</sup> <a name="filenamePrefixInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```typescript
public readonly filenamePrefixInput: string;
```

- *Type:* string

---

##### `filenameSuffixInput`<sup>Optional</sup> <a name="filenameSuffixInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```typescript
public readonly filenameSuffixInput: string;
```

- *Type:* string

---

##### `maxBytesInput`<sup>Optional</sup> <a name="maxBytesInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```typescript
public readonly maxBytesInput: number;
```

- *Type:* number

---

##### `maxDurationInput`<sup>Optional</sup> <a name="maxDurationInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```typescript
public readonly maxDurationInput: string;
```

- *Type:* string

---

##### `maxMessagesInput`<sup>Optional</sup> <a name="maxMessagesInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput"></a>

```typescript
public readonly maxMessagesInput: number;
```

- *Type:* number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `filenameDatetimeFormat`<sup>Required</sup> <a name="filenameDatetimeFormat" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```typescript
public readonly filenameDatetimeFormat: string;
```

- *Type:* string

---

##### `filenamePrefix`<sup>Required</sup> <a name="filenamePrefix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```typescript
public readonly filenamePrefix: string;
```

- *Type:* string

---

##### `filenameSuffix`<sup>Required</sup> <a name="filenameSuffix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```typescript
public readonly filenameSuffix: string;
```

- *Type:* string

---

##### `maxBytes`<sup>Required</sup> <a name="maxBytes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```typescript
public readonly maxBytes: number;
```

- *Type:* number

---

##### `maxDuration`<sup>Required</sup> <a name="maxDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```typescript
public readonly maxDuration: string;
```

- *Type:* string

---

##### `maxMessages`<sup>Required</sup> <a name="maxMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```typescript
public readonly maxMessages: number;
```

- *Type:* number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionCloudStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---


### GooglePubsubSubscriptionDeadLetterPolicyOutputReference <a name="GooglePubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">resetDeadLetterTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">resetMaxDeliveryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeadLetterTopic` <a name="resetDeadLetterTopic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```typescript
public resetDeadLetterTopic(): void
```

##### `resetMaxDeliveryAttempts` <a name="resetMaxDeliveryAttempts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```typescript
public resetMaxDeliveryAttempts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">deadLetterTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">maxDeliveryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">deadLetterTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deadLetterTopicInput`<sup>Optional</sup> <a name="deadLetterTopicInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```typescript
public readonly deadLetterTopicInput: string;
```

- *Type:* string

---

##### `maxDeliveryAttemptsInput`<sup>Optional</sup> <a name="maxDeliveryAttemptsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```typescript
public readonly maxDeliveryAttemptsInput: number;
```

- *Type:* number

---

##### `deadLetterTopic`<sup>Required</sup> <a name="deadLetterTopic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: string;
```

- *Type:* string

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```typescript
public readonly maxDeliveryAttempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionDeadLetterPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---


### GooglePubsubSubscriptionExpirationPolicyOutputReference <a name="GooglePubsubSubscriptionExpirationPolicyOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionExpirationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---


### GooglePubsubSubscriptionPushConfigNoWrapperOutputReference <a name="GooglePubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```typescript
public readonly writeMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionPushConfigNoWrapper;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---


### GooglePubsubSubscriptionPushConfigOidcTokenOutputReference <a name="GooglePubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionPushConfigOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---


### GooglePubsubSubscriptionPushConfigOutputReference <a name="GooglePubsubSubscriptionPushConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper">putNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetNoWrapper">resetNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNoWrapper` <a name="putNoWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```typescript
public putNoWrapper(value: GooglePubsubSubscriptionPushConfigNoWrapper): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```typescript
public putOidcToken(value: GooglePubsubSubscriptionPushConfigOidcToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetNoWrapper` <a name="resetNoWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```typescript
public resetNoWrapper(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapper">noWrapper</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference">GooglePubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference">GooglePubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">noWrapperInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">pushEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">pushEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noWrapper`<sup>Required</sup> <a name="noWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```typescript
public readonly noWrapper: GooglePubsubSubscriptionPushConfigNoWrapperOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference">GooglePubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```typescript
public readonly oidcToken: GooglePubsubSubscriptionPushConfigOidcTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference">GooglePubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `noWrapperInput`<sup>Optional</sup> <a name="noWrapperInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```typescript
public readonly noWrapperInput: GooglePubsubSubscriptionPushConfigNoWrapper;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: GooglePubsubSubscriptionPushConfigOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---

##### `pushEndpointInput`<sup>Optional</sup> <a name="pushEndpointInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```typescript
public readonly pushEndpointInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pushEndpoint`<sup>Required</sup> <a name="pushEndpoint" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```typescript
public readonly pushEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionPushConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---


### GooglePubsubSubscriptionRetryPolicyOutputReference <a name="GooglePubsubSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">resetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">resetMinimumBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBackoff` <a name="resetMaximumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```typescript
public resetMaximumBackoff(): void
```

##### `resetMinimumBackoff` <a name="resetMinimumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```typescript
public resetMinimumBackoff(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">maximumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">minimumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBackoffInput`<sup>Optional</sup> <a name="maximumBackoffInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```typescript
public readonly maximumBackoffInput: string;
```

- *Type:* string

---

##### `minimumBackoffInput`<sup>Optional</sup> <a name="minimumBackoffInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```typescript
public readonly minimumBackoffInput: string;
```

- *Type:* string

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```typescript
public readonly maximumBackoff: string;
```

- *Type:* string

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```typescript
public readonly minimumBackoff: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---


### GooglePubsubSubscriptionTimeoutsOutputReference <a name="GooglePubsubSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googlePubsubSubscription } from '@cdktf/provider-google-beta'

new googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GooglePubsubSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

---



