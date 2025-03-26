# `googleComputeServiceAttachment` Submodule <a name="`googleComputeServiceAttachment` Submodule" id="@cdktf/provider-google-beta.googleComputeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeServiceAttachment <a name="GoogleComputeServiceAttachment" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

new googleComputeServiceAttachment.GoogleComputeServiceAttachment(scope: Construct, id: string, config: GoogleComputeServiceAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig">GoogleComputeServiceAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig">GoogleComputeServiceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists">putConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerAcceptLists">resetConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerRejectLists">resetConsumerRejectLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDomainNames">resetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetPropagatedConnectionLimit">resetPropagatedConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetReconcileConnections">resetReconcileConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConsumerAcceptLists` <a name="putConsumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists"></a>

```typescript
public putConsumerAcceptLists(value: IResolvable | GoogleComputeServiceAttachmentConsumerAcceptLists[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeServiceAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

---

##### `resetConsumerAcceptLists` <a name="resetConsumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerAcceptLists"></a>

```typescript
public resetConsumerAcceptLists(): void
```

##### `resetConsumerRejectLists` <a name="resetConsumerRejectLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerRejectLists"></a>

```typescript
public resetConsumerRejectLists(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainNames` <a name="resetDomainNames" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDomainNames"></a>

```typescript
public resetDomainNames(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPropagatedConnectionLimit` <a name="resetPropagatedConnectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetPropagatedConnectionLimit"></a>

```typescript
public resetPropagatedConnectionLimit(): void
```

##### `resetReconcileConnections` <a name="resetReconcileConnections" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetReconcileConnections"></a>

```typescript
public resetReconcileConnections(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeServiceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeServiceAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeServiceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectedEndpoints">connectedEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList">GoogleComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList">GoogleComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference">GoogleComputeServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreferenceInput">connectionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptListsInput">consumerAcceptListsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectListsInput">consumerRejectListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNamesInput">domainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocolInput">enableProxyProtocolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnetsInput">natSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimitInput">propagatedConnectionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnectionsInput">reconcileConnectionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetServiceInput">targetServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreference">connectionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectLists">consumerRejectLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnets">natSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnections">reconcileConnections</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetService">targetService</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectedEndpoints`<sup>Required</sup> <a name="connectedEndpoints" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectedEndpoints"></a>

```typescript
public readonly connectedEndpoints: GoogleComputeServiceAttachmentConnectedEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList">GoogleComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `consumerAcceptLists`<sup>Required</sup> <a name="consumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptLists"></a>

```typescript
public readonly consumerAcceptLists: GoogleComputeServiceAttachmentConsumerAcceptListsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList">GoogleComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeServiceAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference">GoogleComputeServiceAttachmentTimeoutsOutputReference</a>

---

##### `connectionPreferenceInput`<sup>Optional</sup> <a name="connectionPreferenceInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreferenceInput"></a>

```typescript
public readonly connectionPreferenceInput: string;
```

- *Type:* string

---

##### `consumerAcceptListsInput`<sup>Optional</sup> <a name="consumerAcceptListsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptListsInput"></a>

```typescript
public readonly consumerAcceptListsInput: IResolvable | GoogleComputeServiceAttachmentConsumerAcceptLists[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>[]

---

##### `consumerRejectListsInput`<sup>Optional</sup> <a name="consumerRejectListsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectListsInput"></a>

```typescript
public readonly consumerRejectListsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNamesInput`<sup>Optional</sup> <a name="domainNamesInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNamesInput"></a>

```typescript
public readonly domainNamesInput: string[];
```

- *Type:* string[]

---

##### `enableProxyProtocolInput`<sup>Optional</sup> <a name="enableProxyProtocolInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocolInput"></a>

```typescript
public readonly enableProxyProtocolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `natSubnetsInput`<sup>Optional</sup> <a name="natSubnetsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnetsInput"></a>

```typescript
public readonly natSubnetsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propagatedConnectionLimitInput`<sup>Optional</sup> <a name="propagatedConnectionLimitInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimitInput"></a>

```typescript
public readonly propagatedConnectionLimitInput: number;
```

- *Type:* number

---

##### `reconcileConnectionsInput`<sup>Optional</sup> <a name="reconcileConnectionsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnectionsInput"></a>

```typescript
public readonly reconcileConnectionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `targetServiceInput`<sup>Optional</sup> <a name="targetServiceInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetServiceInput"></a>

```typescript
public readonly targetServiceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeServiceAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreference"></a>

```typescript
public readonly connectionPreference: string;
```

- *Type:* string

---

##### `consumerRejectLists`<sup>Required</sup> <a name="consumerRejectLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectLists"></a>

```typescript
public readonly consumerRejectLists: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocol"></a>

```typescript
public readonly enableProxyProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnets"></a>

```typescript
public readonly natSubnets: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `propagatedConnectionLimit`<sup>Required</sup> <a name="propagatedConnectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimit"></a>

```typescript
public readonly propagatedConnectionLimit: number;
```

- *Type:* number

---

##### `reconcileConnections`<sup>Required</sup> <a name="reconcileConnections" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnections"></a>

```typescript
public readonly reconcileConnections: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetService"></a>

```typescript
public readonly targetService: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeServiceAttachmentConfig <a name="GoogleComputeServiceAttachmentConfig" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

const googleComputeServiceAttachmentConfig: googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connectionPreference">connectionPreference</a></code> | <code>string</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.natSubnets">natSubnets</a></code> | <code>string[]</code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.targetService">targetService</a></code> | <code>string</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>[]</code> | consumer_accept_lists block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerRejectLists">consumerRejectLists</a></code> | <code>string[]</code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.domainNames">domainNames</a></code> | <code>string[]</code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#id GoogleComputeServiceAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#project GoogleComputeServiceAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>number</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.reconcileConnections">reconcileConnections</a></code> | <code>boolean \| cdktf.IResolvable</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.region">region</a></code> | <code>string</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connectionPreference"></a>

```typescript
public readonly connectionPreference: string;
```

- *Type:* string

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#connection_preference GoogleComputeServiceAttachment#connection_preference}

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.enableProxyProtocol"></a>

```typescript
public readonly enableProxyProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#enable_proxy_protocol GoogleComputeServiceAttachment#enable_proxy_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#name GoogleComputeServiceAttachment#name}

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.natSubnets"></a>

```typescript
public readonly natSubnets: string[];
```

- *Type:* string[]

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#nat_subnets GoogleComputeServiceAttachment#nat_subnets}

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.targetService"></a>

```typescript
public readonly targetService: string;
```

- *Type:* string

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#target_service GoogleComputeServiceAttachment#target_service}

---

##### `consumerAcceptLists`<sup>Optional</sup> <a name="consumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerAcceptLists"></a>

```typescript
public readonly consumerAcceptLists: IResolvable | GoogleComputeServiceAttachmentConsumerAcceptLists[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>[]

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#consumer_accept_lists GoogleComputeServiceAttachment#consumer_accept_lists}

---

##### `consumerRejectLists`<sup>Optional</sup> <a name="consumerRejectLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerRejectLists"></a>

```typescript
public readonly consumerRejectLists: string[];
```

- *Type:* string[]

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#consumer_reject_lists GoogleComputeServiceAttachment#consumer_reject_lists}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#description GoogleComputeServiceAttachment#description}

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#domain_names GoogleComputeServiceAttachment#domain_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#id GoogleComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#project GoogleComputeServiceAttachment#project}.

---

##### `propagatedConnectionLimit`<sup>Optional</sup> <a name="propagatedConnectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.propagatedConnectionLimit"></a>

```typescript
public readonly propagatedConnectionLimit: number;
```

- *Type:* number

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#propagated_connection_limit GoogleComputeServiceAttachment#propagated_connection_limit}

---

##### `reconcileConnections`<sup>Optional</sup> <a name="reconcileConnections" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.reconcileConnections"></a>

```typescript
public readonly reconcileConnections: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#reconcile_connections GoogleComputeServiceAttachment#reconcile_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#region GoogleComputeServiceAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeServiceAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#timeouts GoogleComputeServiceAttachment#timeouts}

---

### GoogleComputeServiceAttachmentConnectedEndpoints <a name="GoogleComputeServiceAttachmentConnectedEndpoints" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

const googleComputeServiceAttachmentConnectedEndpoints: googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints = { ... }
```


### GoogleComputeServiceAttachmentConsumerAcceptLists <a name="GoogleComputeServiceAttachmentConsumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

const googleComputeServiceAttachmentConsumerAcceptLists: googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | The number of consumer forwarding rules the consumer project can create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.networkUrl">networkUrl</a></code> | <code>string</code> | The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum">projectIdOrNum</a></code> | <code>string</code> | A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

The number of consumer forwarding rules the consumer project can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#connection_limit GoogleComputeServiceAttachment#connection_limit}

---

##### `networkUrl`<sup>Optional</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#network_url GoogleComputeServiceAttachment#network_url}

---

##### `projectIdOrNum`<sup>Optional</sup> <a name="projectIdOrNum" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum"></a>

```typescript
public readonly projectIdOrNum: string;
```

- *Type:* string

A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#project_id_or_num GoogleComputeServiceAttachment#project_id_or_num}

---

### GoogleComputeServiceAttachmentTimeouts <a name="GoogleComputeServiceAttachmentTimeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

const googleComputeServiceAttachmentTimeouts: googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#create GoogleComputeServiceAttachment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#delete GoogleComputeServiceAttachment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#update GoogleComputeServiceAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#create GoogleComputeServiceAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#delete GoogleComputeServiceAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_service_attachment#update GoogleComputeServiceAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeServiceAttachmentConnectedEndpointsList <a name="GoogleComputeServiceAttachmentConnectedEndpointsList" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

new googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get"></a>

```typescript
public get(index: number): GoogleComputeServiceAttachmentConnectedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeServiceAttachmentConnectedEndpointsOutputReference <a name="GoogleComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

new googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagatedConnectionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints">GoogleComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```typescript
public readonly consumerNetwork: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `propagatedConnectionCount`<sup>Required</sup> <a name="propagatedConnectionCount" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```typescript
public readonly propagatedConnectionCount: number;
```

- *Type:* number

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeServiceAttachmentConnectedEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints">GoogleComputeServiceAttachmentConnectedEndpoints</a>

---


### GoogleComputeServiceAttachmentConsumerAcceptListsList <a name="GoogleComputeServiceAttachmentConsumerAcceptListsList" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

new googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```typescript
public get(index: number): GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeServiceAttachmentConsumerAcceptLists[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>[]

---


### GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

new googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl">resetNetworkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum">resetProjectIdOrNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkUrl` <a name="resetNetworkUrl" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl"></a>

```typescript
public resetNetworkUrl(): void
```

##### `resetProjectIdOrNum` <a name="resetProjectIdOrNum" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum"></a>

```typescript
public resetProjectIdOrNum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput">connectionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput">projectIdOrNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">networkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">projectIdOrNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput"></a>

```typescript
public readonly connectionLimitInput: number;
```

- *Type:* number

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput"></a>

```typescript
public readonly networkUrlInput: string;
```

- *Type:* string

---

##### `projectIdOrNumInput`<sup>Optional</sup> <a name="projectIdOrNumInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput"></a>

```typescript
public readonly projectIdOrNumInput: string;
```

- *Type:* string

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

---

##### `projectIdOrNum`<sup>Required</sup> <a name="projectIdOrNum" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```typescript
public readonly projectIdOrNum: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeServiceAttachmentConsumerAcceptLists;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>

---


### GoogleComputeServiceAttachmentTimeoutsOutputReference <a name="GoogleComputeServiceAttachmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeServiceAttachment } from '@cdktf/provider-google-beta'

new googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeServiceAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

---



