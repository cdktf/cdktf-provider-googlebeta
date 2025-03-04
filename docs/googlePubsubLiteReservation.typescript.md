# `googlePubsubLiteReservation` Submodule <a name="`googlePubsubLiteReservation` Submodule" id="@cdktf/provider-google-beta.googlePubsubLiteReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubLiteReservation <a name="GooglePubsubLiteReservation" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation google_pubsub_lite_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer"></a>

```typescript
import { googlePubsubLiteReservation } from '@cdktf/provider-google-beta'

new googlePubsubLiteReservation.GooglePubsubLiteReservation(scope: Construct, id: string, config: GooglePubsubLiteReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig">GooglePubsubLiteReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig">GooglePubsubLiteReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.putTimeouts"></a>

```typescript
public putTimeouts(value: GooglePubsubLiteReservationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePubsubLiteReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isConstruct"></a>

```typescript
import { googlePubsubLiteReservation } from '@cdktf/provider-google-beta'

googlePubsubLiteReservation.GooglePubsubLiteReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformElement"></a>

```typescript
import { googlePubsubLiteReservation } from '@cdktf/provider-google-beta'

googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformResource"></a>

```typescript
import { googlePubsubLiteReservation } from '@cdktf/provider-google-beta'

googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport"></a>

```typescript
import { googlePubsubLiteReservation } from '@cdktf/provider-google-beta'

googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GooglePubsubLiteReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePubsubLiteReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePubsubLiteReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubLiteReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference">GooglePubsubLiteReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.throughputCapacityInput">throughputCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePubsubLiteReservationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference">GooglePubsubLiteReservationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `throughputCapacityInput`<sup>Optional</sup> <a name="throughputCapacityInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.throughputCapacityInput"></a>

```typescript
public readonly throughputCapacityInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GooglePubsubLiteReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubLiteReservationConfig <a name="GooglePubsubLiteReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.Initializer"></a>

```typescript
import { googlePubsubLiteReservation } from '@cdktf/provider-google-beta'

const googlePubsubLiteReservationConfig: googlePubsubLiteReservation.GooglePubsubLiteReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.name">name</a></code> | <code>string</code> | Name of the reservation. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | The reserved throughput capacity. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#id GooglePubsubLiteReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#project GooglePubsubLiteReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.region">region</a></code> | <code>string</code> | The region of the pubsub lite reservation. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#name GooglePubsubLiteReservation#name}

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

The reserved throughput capacity.

Every unit of throughput capacity is
equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed
messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#throughput_capacity GooglePubsubLiteReservation#throughput_capacity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#id GooglePubsubLiteReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#project GooglePubsubLiteReservation#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the pubsub lite reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#region GooglePubsubLiteReservation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePubsubLiteReservationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#timeouts GooglePubsubLiteReservation#timeouts}

---

### GooglePubsubLiteReservationTimeouts <a name="GooglePubsubLiteReservationTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.Initializer"></a>

```typescript
import { googlePubsubLiteReservation } from '@cdktf/provider-google-beta'

const googlePubsubLiteReservationTimeouts: googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#create GooglePubsubLiteReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#delete GooglePubsubLiteReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#update GooglePubsubLiteReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#create GooglePubsubLiteReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#delete GooglePubsubLiteReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#update GooglePubsubLiteReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubLiteReservationTimeoutsOutputReference <a name="GooglePubsubLiteReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googlePubsubLiteReservation } from '@cdktf/provider-google-beta'

new googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GooglePubsubLiteReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

---



