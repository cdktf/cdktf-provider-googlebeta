# `googlePubsubTopic` Submodule <a name="`googlePubsubTopic` Submodule" id="@cdktf/provider-google-beta.googlePubsubTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubTopic <a name="GooglePubsubTopic" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic google_pubsub_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopic(scope: Construct, id: string, config: GooglePubsubTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig">GooglePubsubTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig">GooglePubsubTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putIngestionDataSourceSettings">putIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putMessageStoragePolicy">putMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putSchemaSettings">putSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetIngestionDataSourceSettings">resetIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetMessageRetentionDuration">resetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetMessageStoragePolicy">resetMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetSchemaSettings">resetSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngestionDataSourceSettings` <a name="putIngestionDataSourceSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putIngestionDataSourceSettings"></a>

```typescript
public putIngestionDataSourceSettings(value: GooglePubsubTopicIngestionDataSourceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putIngestionDataSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings">GooglePubsubTopicIngestionDataSourceSettings</a>

---

##### `putMessageStoragePolicy` <a name="putMessageStoragePolicy" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putMessageStoragePolicy"></a>

```typescript
public putMessageStoragePolicy(value: GooglePubsubTopicMessageStoragePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putMessageStoragePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy">GooglePubsubTopicMessageStoragePolicy</a>

---

##### `putSchemaSettings` <a name="putSchemaSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putSchemaSettings"></a>

```typescript
public putSchemaSettings(value: GooglePubsubTopicSchemaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putSchemaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings">GooglePubsubTopicSchemaSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: GooglePubsubTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts">GooglePubsubTopicTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngestionDataSourceSettings` <a name="resetIngestionDataSourceSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetIngestionDataSourceSettings"></a>

```typescript
public resetIngestionDataSourceSettings(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMessageRetentionDuration` <a name="resetMessageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetMessageRetentionDuration"></a>

```typescript
public resetMessageRetentionDuration(): void
```

##### `resetMessageStoragePolicy` <a name="resetMessageStoragePolicy" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetMessageStoragePolicy"></a>

```typescript
public resetMessageStoragePolicy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSchemaSettings` <a name="resetSchemaSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetSchemaSettings"></a>

```typescript
public resetSchemaSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePubsubTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isConstruct"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

googlePubsubTopic.GooglePubsubTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isTerraformElement"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

googlePubsubTopic.GooglePubsubTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isTerraformResource"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

googlePubsubTopic.GooglePubsubTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.generateConfigForImport"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

googlePubsubTopic.GooglePubsubTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GooglePubsubTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePubsubTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePubsubTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference">GooglePubsubTopicIngestionDataSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference">GooglePubsubTopicMessageStoragePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference">GooglePubsubTopicSchemaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference">GooglePubsubTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.ingestionDataSourceSettingsInput">ingestionDataSourceSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings">GooglePubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.messageRetentionDurationInput">messageRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.messageStoragePolicyInput">messageStoragePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy">GooglePubsubTopicMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.schemaSettingsInput">schemaSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings">GooglePubsubTopicSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts">GooglePubsubTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ingestionDataSourceSettings`<sup>Required</sup> <a name="ingestionDataSourceSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.ingestionDataSourceSettings"></a>

```typescript
public readonly ingestionDataSourceSettings: GooglePubsubTopicIngestionDataSourceSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference">GooglePubsubTopicIngestionDataSourceSettingsOutputReference</a>

---

##### `messageStoragePolicy`<sup>Required</sup> <a name="messageStoragePolicy" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.messageStoragePolicy"></a>

```typescript
public readonly messageStoragePolicy: GooglePubsubTopicMessageStoragePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference">GooglePubsubTopicMessageStoragePolicyOutputReference</a>

---

##### `schemaSettings`<sup>Required</sup> <a name="schemaSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.schemaSettings"></a>

```typescript
public readonly schemaSettings: GooglePubsubTopicSchemaSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference">GooglePubsubTopicSchemaSettingsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePubsubTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference">GooglePubsubTopicTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestionDataSourceSettingsInput`<sup>Optional</sup> <a name="ingestionDataSourceSettingsInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.ingestionDataSourceSettingsInput"></a>

```typescript
public readonly ingestionDataSourceSettingsInput: GooglePubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings">GooglePubsubTopicIngestionDataSourceSettings</a>

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDurationInput`<sup>Optional</sup> <a name="messageRetentionDurationInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.messageRetentionDurationInput"></a>

```typescript
public readonly messageRetentionDurationInput: string;
```

- *Type:* string

---

##### `messageStoragePolicyInput`<sup>Optional</sup> <a name="messageStoragePolicyInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.messageStoragePolicyInput"></a>

```typescript
public readonly messageStoragePolicyInput: GooglePubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy">GooglePubsubTopicMessageStoragePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `schemaSettingsInput`<sup>Optional</sup> <a name="schemaSettingsInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.schemaSettingsInput"></a>

```typescript
public readonly schemaSettingsInput: GooglePubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings">GooglePubsubTopicSchemaSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GooglePubsubTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts">GooglePubsubTopicTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubTopicConfig <a name="GooglePubsubTopicConfig" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicConfig: googlePubsubTopic.GooglePubsubTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.name">name</a></code> | <code>string</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#id GooglePubsubTopic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings">GooglePubsubTopicIngestionDataSourceSettings</a></code> | ingestion_data_source_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this Topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | Indicates the minimum duration to retain a message after it is published to the topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy">GooglePubsubTopicMessageStoragePolicy</a></code> | message_storage_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#project GooglePubsubTopic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings">GooglePubsubTopicSchemaSettings</a></code> | schema_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts">GooglePubsubTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#name GooglePubsubTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#id GooglePubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionDataSourceSettings`<sup>Optional</sup> <a name="ingestionDataSourceSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.ingestionDataSourceSettings"></a>

```typescript
public readonly ingestionDataSourceSettings: GooglePubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings">GooglePubsubTopicIngestionDataSourceSettings</a>

ingestion_data_source_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#ingestion_data_source_settings GooglePubsubTopic#ingestion_data_source_settings}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#kms_key_name GooglePubsubTopic#kms_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this Topic.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#labels GooglePubsubTopic#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

Indicates the minimum duration to retain a message after it is published to the topic.

If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#message_retention_duration GooglePubsubTopic#message_retention_duration}

---

##### `messageStoragePolicy`<sup>Optional</sup> <a name="messageStoragePolicy" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.messageStoragePolicy"></a>

```typescript
public readonly messageStoragePolicy: GooglePubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy">GooglePubsubTopicMessageStoragePolicy</a>

message_storage_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#message_storage_policy GooglePubsubTopic#message_storage_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#project GooglePubsubTopic#project}.

---

##### `schemaSettings`<sup>Optional</sup> <a name="schemaSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.schemaSettings"></a>

```typescript
public readonly schemaSettings: GooglePubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings">GooglePubsubTopicSchemaSettings</a>

schema_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#schema_settings GooglePubsubTopic#schema_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePubsubTopicTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts">GooglePubsubTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#timeouts GooglePubsubTopic#timeouts}

---

### GooglePubsubTopicIngestionDataSourceSettings <a name="GooglePubsubTopicIngestionDataSourceSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicIngestionDataSourceSettings: googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings.property.awsKinesis">awsKinesis</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | aws_kinesis block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings.property.cloudStorage">cloudStorage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage">GooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | cloud_storage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings.property.platformLogsSettings">platformLogsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | platform_logs_settings block. |

---

##### `awsKinesis`<sup>Optional</sup> <a name="awsKinesis" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings.property.awsKinesis"></a>

```typescript
public readonly awsKinesis: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

aws_kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#aws_kinesis GooglePubsubTopic#aws_kinesis}

---

##### `cloudStorage`<sup>Optional</sup> <a name="cloudStorage" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings.property.cloudStorage"></a>

```typescript
public readonly cloudStorage: GooglePubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage">GooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a>

cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#cloud_storage GooglePubsubTopic#cloud_storage}

---

##### `platformLogsSettings`<sup>Optional</sup> <a name="platformLogsSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings.property.platformLogsSettings"></a>

```typescript
public readonly platformLogsSettings: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

platform_logs_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#platform_logs_settings GooglePubsubTopic#platform_logs_settings}

---

### GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis <a name="GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicIngestionDataSourceSettingsAwsKinesis: googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | AWS role ARN to be used for Federated Identity authentication with Kinesis. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn">consumerArn</a></code> | <code>string</code> | The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn">streamArn</a></code> | <code>string</code> | The Kinesis stream ARN to ingest data from. |

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

AWS role ARN to be used for Federated Identity authentication with Kinesis.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#aws_role_arn GooglePubsubTopic#aws_role_arn}

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn"></a>

```typescript
public readonly consumerArn: string;
```

- *Type:* string

The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode.

The consumer must be already
created and ready to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#consumer_arn GooglePubsubTopic#consumer_arn}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#gcp_service_account GooglePubsubTopic#gcp_service_account}

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

The Kinesis stream ARN to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#stream_arn GooglePubsubTopic#stream_arn}

---

### GooglePubsubTopicIngestionDataSourceSettingsCloudStorage <a name="GooglePubsubTopicIngestionDataSourceSettingsCloudStorage" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicIngestionDataSourceSettingsCloudStorage: googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket">bucket</a></code> | <code>string</code> | Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat">avroFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | avro_format block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob">matchGlob</a></code> | <code>string</code> | Glob pattern used to match objects that will be ingested. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime">minimumObjectCreateTime</a></code> | <code>string</code> | The timestamp set in RFC3339 text format. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat">pubsubAvroFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | pubsub_avro_format block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat">textFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | text_format block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#bucket GooglePubsubTopic#bucket}

---

##### `avroFormat`<sup>Optional</sup> <a name="avroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat"></a>

```typescript
public readonly avroFormat: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#avro_format GooglePubsubTopic#avro_format}

---

##### `matchGlob`<sup>Optional</sup> <a name="matchGlob" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob"></a>

```typescript
public readonly matchGlob: string;
```

- *Type:* string

Glob pattern used to match objects that will be ingested.

If unset, all
objects will be ingested. See the supported patterns:
https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-objects-and-prefixes-using-glob

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#match_glob GooglePubsubTopic#match_glob}

---

##### `minimumObjectCreateTime`<sup>Optional</sup> <a name="minimumObjectCreateTime" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime"></a>

```typescript
public readonly minimumObjectCreateTime: string;
```

- *Type:* string

The timestamp set in RFC3339 text format.

If set, only objects with a
larger or equal timestamp will be ingested. Unset by default, meaning
all objects will be ingested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#minimum_object_create_time GooglePubsubTopic#minimum_object_create_time}

---

##### `pubsubAvroFormat`<sup>Optional</sup> <a name="pubsubAvroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat"></a>

```typescript
public readonly pubsubAvroFormat: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

pubsub_avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#pubsub_avro_format GooglePubsubTopic#pubsub_avro_format}

---

##### `textFormat`<sup>Optional</sup> <a name="textFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat"></a>

```typescript
public readonly textFormat: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

text_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#text_format GooglePubsubTopic#text_format}

---

### GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat <a name="GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat: googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat = { ... }
```


### GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat <a name="GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat: googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat = { ... }
```


### GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat <a name="GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat: googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter">delimiter</a></code> | <code>string</code> | The delimiter to use when using the 'text' format. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

The delimiter to use when using the 'text' format.

Each line of text as
specified by the delimiter will be set to the 'data' field of a Pub/Sub
message. When unset, '\n' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#delimiter GooglePubsubTopic#delimiter}

---

### GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings <a name="GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings: googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity">severity</a></code> | <code>string</code> | The minimum severity level of Platform Logs that will be written. |

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The minimum severity level of Platform Logs that will be written.

If unspecified,
no Platform Logs will be written. Default value: "SEVERITY_UNSPECIFIED" Possible values: ["SEVERITY_UNSPECIFIED", "DISABLED", "DEBUG", "INFO", "WARNING", "ERROR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#severity GooglePubsubTopic#severity}

---

### GooglePubsubTopicMessageStoragePolicy <a name="GooglePubsubTopicMessageStoragePolicy" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicMessageStoragePolicy: googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions">allowedPersistenceRegions</a></code> | <code>string[]</code> | A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage. |

---

##### `allowedPersistenceRegions`<sup>Required</sup> <a name="allowedPersistenceRegions" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions"></a>

```typescript
public readonly allowedPersistenceRegions: string[];
```

- *Type:* string[]

A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage.

Messages published by
publishers running in non-allowed GCP regions (or running outside
of GCP altogether) will be routed for storage in one of the
allowed regions. An empty list means that no regions are allowed,
and is not a valid configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#allowed_persistence_regions GooglePubsubTopic#allowed_persistence_regions}

---

### GooglePubsubTopicSchemaSettings <a name="GooglePubsubTopicSchemaSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicSchemaSettings: googlePubsubTopic.GooglePubsubTopicSchemaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings.property.schema">schema</a></code> | <code>string</code> | The name of the schema that messages published should be validated against. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings.property.encoding">encoding</a></code> | <code>string</code> | The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]. |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The name of the schema that messages published should be validated against.

Format is projects/{project}/schemas/{schema}.
The value of this field will be _deleted-schema_
if the schema has been deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#schema GooglePubsubTopic#schema}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#encoding GooglePubsubTopic#encoding}

---

### GooglePubsubTopicTimeouts <a name="GooglePubsubTopicTimeouts" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

const googlePubsubTopicTimeouts: googlePubsubTopic.GooglePubsubTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#create GooglePubsubTopic#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#delete GooglePubsubTopic#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#update GooglePubsubTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#create GooglePubsubTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#delete GooglePubsubTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_pubsub_topic#update GooglePubsubTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference <a name="GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput">consumerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn">consumerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput"></a>

```typescript
public readonly awsRoleArnInput: string;
```

- *Type:* string

---

##### `consumerArnInput`<sup>Optional</sup> <a name="consumerArnInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput"></a>

```typescript
public readonly consumerArnInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn"></a>

```typescript
public readonly consumerArn: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---


### GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference <a name="GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---


### GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference <a name="GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat">putAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat">putPubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat">putTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat">resetAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob">resetMatchGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime">resetMinimumObjectCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat">resetPubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat">resetTextFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvroFormat` <a name="putAvroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat"></a>

```typescript
public putAvroFormat(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `putPubsubAvroFormat` <a name="putPubsubAvroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat"></a>

```typescript
public putPubsubAvroFormat(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `putTextFormat` <a name="putTextFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat"></a>

```typescript
public putTextFormat(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `resetAvroFormat` <a name="resetAvroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat"></a>

```typescript
public resetAvroFormat(): void
```

##### `resetMatchGlob` <a name="resetMatchGlob" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob"></a>

```typescript
public resetMatchGlob(): void
```

##### `resetMinimumObjectCreateTime` <a name="resetMinimumObjectCreateTime" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime"></a>

```typescript
public resetMinimumObjectCreateTime(): void
```

##### `resetPubsubAvroFormat` <a name="resetPubsubAvroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat"></a>

```typescript
public resetPubsubAvroFormat(): void
```

##### `resetTextFormat` <a name="resetTextFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat"></a>

```typescript
public resetTextFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat">avroFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat">pubsubAvroFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat">textFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput">avroFormatInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput">matchGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput">minimumObjectCreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput">pubsubAvroFormatInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput">textFormatInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob">matchGlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime">minimumObjectCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage">GooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avroFormat`<sup>Required</sup> <a name="avroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat"></a>

```typescript
public readonly avroFormat: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a>

---

##### `pubsubAvroFormat`<sup>Required</sup> <a name="pubsubAvroFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat"></a>

```typescript
public readonly pubsubAvroFormat: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a>

---

##### `textFormat`<sup>Required</sup> <a name="textFormat" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat"></a>

```typescript
public readonly textFormat: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a>

---

##### `avroFormatInput`<sup>Optional</sup> <a name="avroFormatInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput"></a>

```typescript
public readonly avroFormatInput: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `matchGlobInput`<sup>Optional</sup> <a name="matchGlobInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput"></a>

```typescript
public readonly matchGlobInput: string;
```

- *Type:* string

---

##### `minimumObjectCreateTimeInput`<sup>Optional</sup> <a name="minimumObjectCreateTimeInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput"></a>

```typescript
public readonly minimumObjectCreateTimeInput: string;
```

- *Type:* string

---

##### `pubsubAvroFormatInput`<sup>Optional</sup> <a name="pubsubAvroFormatInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput"></a>

```typescript
public readonly pubsubAvroFormatInput: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `textFormatInput`<sup>Optional</sup> <a name="textFormatInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput"></a>

```typescript
public readonly textFormatInput: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `matchGlob`<sup>Required</sup> <a name="matchGlob" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob"></a>

```typescript
public readonly matchGlob: string;
```

- *Type:* string

---

##### `minimumObjectCreateTime`<sup>Required</sup> <a name="minimumObjectCreateTime" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime"></a>

```typescript
public readonly minimumObjectCreateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage">GooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---


### GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference <a name="GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---


### GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference <a name="GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---


### GooglePubsubTopicIngestionDataSourceSettingsOutputReference <a name="GooglePubsubTopicIngestionDataSourceSettingsOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis">putAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage">putCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings">putPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis">resetAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage">resetCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings">resetPlatformLogsSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsKinesis` <a name="putAwsKinesis" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis"></a>

```typescript
public putAwsKinesis(value: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `putCloudStorage` <a name="putCloudStorage" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage"></a>

```typescript
public putCloudStorage(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage">GooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `putPlatformLogsSettings` <a name="putPlatformLogsSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings"></a>

```typescript
public putPlatformLogsSettings(value: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `resetAwsKinesis` <a name="resetAwsKinesis" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis"></a>

```typescript
public resetAwsKinesis(): void
```

##### `resetCloudStorage` <a name="resetCloudStorage" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage"></a>

```typescript
public resetCloudStorage(): void
```

##### `resetPlatformLogsSettings` <a name="resetPlatformLogsSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings"></a>

```typescript
public resetPlatformLogsSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis">awsKinesis</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage">cloudStorage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings">platformLogsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput">awsKinesisInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput">cloudStorageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage">GooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput">platformLogsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings">GooglePubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsKinesis`<sup>Required</sup> <a name="awsKinesis" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis"></a>

```typescript
public readonly awsKinesis: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a>

---

##### `cloudStorage`<sup>Required</sup> <a name="cloudStorage" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage"></a>

```typescript
public readonly cloudStorage: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a>

---

##### `platformLogsSettings`<sup>Required</sup> <a name="platformLogsSettings" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings"></a>

```typescript
public readonly platformLogsSettings: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a>

---

##### `awsKinesisInput`<sup>Optional</sup> <a name="awsKinesisInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput"></a>

```typescript
public readonly awsKinesisInput: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `cloudStorageInput`<sup>Optional</sup> <a name="cloudStorageInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput"></a>

```typescript
public readonly cloudStorageInput: GooglePubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsCloudStorage">GooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `platformLogsSettingsInput`<sup>Optional</sup> <a name="platformLogsSettingsInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput"></a>

```typescript
public readonly platformLogsSettingsInput: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettings">GooglePubsubTopicIngestionDataSourceSettings</a>

---


### GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference <a name="GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---


### GooglePubsubTopicMessageStoragePolicyOutputReference <a name="GooglePubsubTopicMessageStoragePolicyOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput">allowedPersistenceRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions">allowedPersistenceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy">GooglePubsubTopicMessageStoragePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPersistenceRegionsInput`<sup>Optional</sup> <a name="allowedPersistenceRegionsInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput"></a>

```typescript
public readonly allowedPersistenceRegionsInput: string[];
```

- *Type:* string[]

---

##### `allowedPersistenceRegions`<sup>Required</sup> <a name="allowedPersistenceRegions" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions"></a>

```typescript
public readonly allowedPersistenceRegions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicMessageStoragePolicy">GooglePubsubTopicMessageStoragePolicy</a>

---


### GooglePubsubTopicSchemaSettingsOutputReference <a name="GooglePubsubTopicSchemaSettingsOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings">GooglePubsubTopicSchemaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicSchemaSettings">GooglePubsubTopicSchemaSettings</a>

---


### GooglePubsubTopicTimeoutsOutputReference <a name="GooglePubsubTopicTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { googlePubsubTopic } from '@cdktf/provider-google-beta'

new googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts">GooglePubsubTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GooglePubsubTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googlePubsubTopic.GooglePubsubTopicTimeouts">GooglePubsubTopicTimeouts</a>

---



