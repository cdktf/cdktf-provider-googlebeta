# `googleFirestoreIndex` Submodule <a name="`googleFirestoreIndex` Submodule" id="@cdktf/provider-google-beta.googleFirestoreIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreIndex <a name="GoogleFirestoreIndex" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index google_firestore_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

new googleFirestoreIndex.GoogleFirestoreIndex(scope: Construct, id: string, config: GoogleFirestoreIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig">GoogleFirestoreIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig">GoogleFirestoreIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetApiScope">resetApiScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetQueryScope">resetQueryScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields"></a>

```typescript
public putFields(value: IResolvable | GoogleFirestoreIndexFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirestoreIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---

##### `resetApiScope` <a name="resetApiScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetApiScope"></a>

```typescript
public resetApiScope(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQueryScope` <a name="resetQueryScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetQueryScope"></a>

```typescript
public resetQueryScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirestoreIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

googleFirestoreIndex.GoogleFirestoreIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirestoreIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirestoreIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirestoreIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList">GoogleFirestoreIndexFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference">GoogleFirestoreIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScopeInput">apiScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collectionInput">collectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fieldsInput">fieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScopeInput">queryScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScope">apiScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collection">collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScope">queryScope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fields"></a>

```typescript
public readonly fields: GoogleFirestoreIndexFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList">GoogleFirestoreIndexFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirestoreIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference">GoogleFirestoreIndexTimeoutsOutputReference</a>

---

##### `apiScopeInput`<sup>Optional</sup> <a name="apiScopeInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScopeInput"></a>

```typescript
public readonly apiScopeInput: string;
```

- *Type:* string

---

##### `collectionInput`<sup>Optional</sup> <a name="collectionInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collectionInput"></a>

```typescript
public readonly collectionInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | GoogleFirestoreIndexFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `queryScopeInput`<sup>Optional</sup> <a name="queryScopeInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScopeInput"></a>

```typescript
public readonly queryScopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirestoreIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---

##### `apiScope`<sup>Required</sup> <a name="apiScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScope"></a>

```typescript
public readonly apiScope: string;
```

- *Type:* string

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `queryScope`<sup>Required</sup> <a name="queryScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScope"></a>

```typescript
public readonly queryScope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreIndexConfig <a name="GoogleFirestoreIndexConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

const googleFirestoreIndexConfig: googleFirestoreIndex.GoogleFirestoreIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.collection">collection</a></code> | <code>string</code> | The collection being indexed. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.fields">fields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]</code> | fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.apiScope">apiScope</a></code> | <code>string</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.database">database</a></code> | <code>string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.queryScope">queryScope</a></code> | <code>string</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#collection GoogleFirestoreIndex#collection}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | GoogleFirestoreIndexFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#fields GoogleFirestoreIndex#fields}

---

##### `apiScope`<sup>Optional</sup> <a name="apiScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.apiScope"></a>

```typescript
public readonly apiScope: string;
```

- *Type:* string

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#api_scope GoogleFirestoreIndex#api_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#database GoogleFirestoreIndex#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}.

---

##### `queryScope`<sup>Optional</sup> <a name="queryScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.queryScope"></a>

```typescript
public readonly queryScope: string;
```

- *Type:* string

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#query_scope GoogleFirestoreIndex#query_scope}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirestoreIndexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#timeouts GoogleFirestoreIndex#timeouts}

---

### GoogleFirestoreIndexFields <a name="GoogleFirestoreIndexFields" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

const googleFirestoreIndexFields: googleFirestoreIndex.GoogleFirestoreIndexFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.arrayConfig">arrayConfig</a></code> | <code>string</code> | Indicates that this field supports operations on arrayValues. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.fieldPath">fieldPath</a></code> | <code>string</code> | Name of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.order">order</a></code> | <code>string</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.vectorConfig">vectorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | vector_config block. |

---

##### `arrayConfig`<sup>Optional</sup> <a name="arrayConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.arrayConfig"></a>

```typescript
public readonly arrayConfig: string;
```

- *Type:* string

Indicates that this field supports operations on arrayValues.

Only one of 'order', 'arrayConfig', and
'vectorConfig' can be specified. Possible values: ["CONTAINS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#array_config GoogleFirestoreIndex#array_config}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#field_path GoogleFirestoreIndex#field_path}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.

Only one of 'order', 'arrayConfig', and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#order GoogleFirestoreIndex#order}

---

##### `vectorConfig`<sup>Optional</sup> <a name="vectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.vectorConfig"></a>

```typescript
public readonly vectorConfig: GoogleFirestoreIndexFieldsVectorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#vector_config GoogleFirestoreIndex#vector_config}

---

### GoogleFirestoreIndexFieldsVectorConfig <a name="GoogleFirestoreIndexFieldsVectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

const googleFirestoreIndexFieldsVectorConfig: googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.dimension">dimension</a></code> | <code>number</code> | The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.flat">flat</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | flat block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.dimension"></a>

```typescript
public readonly dimension: number;
```

- *Type:* number

The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#dimension GoogleFirestoreIndex#dimension}

---

##### `flat`<sup>Optional</sup> <a name="flat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.flat"></a>

```typescript
public readonly flat: GoogleFirestoreIndexFieldsVectorConfigFlat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

flat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#flat GoogleFirestoreIndex#flat}

---

### GoogleFirestoreIndexFieldsVectorConfigFlat <a name="GoogleFirestoreIndexFieldsVectorConfigFlat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

const googleFirestoreIndexFieldsVectorConfigFlat: googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat = { ... }
```


### GoogleFirestoreIndexTimeouts <a name="GoogleFirestoreIndexTimeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

const googleFirestoreIndexTimeouts: googleFirestoreIndex.GoogleFirestoreIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreIndexFieldsList <a name="GoogleFirestoreIndexFieldsList" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

new googleFirestoreIndex.GoogleFirestoreIndexFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get"></a>

```typescript
public get(index: number): GoogleFirestoreIndexFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirestoreIndexFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]

---


### GoogleFirestoreIndexFieldsOutputReference <a name="GoogleFirestoreIndexFieldsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

new googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig">putVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetArrayConfig">resetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetVectorConfig">resetVectorConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVectorConfig` <a name="putVectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig"></a>

```typescript
public putVectorConfig(value: GoogleFirestoreIndexFieldsVectorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---

##### `resetArrayConfig` <a name="resetArrayConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetArrayConfig"></a>

```typescript
public resetArrayConfig(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetVectorConfig` <a name="resetVectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetVectorConfig"></a>

```typescript
public resetVectorConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfig">vectorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference">GoogleFirestoreIndexFieldsVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfigInput">arrayConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfigInput">vectorConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfig">arrayConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vectorConfig`<sup>Required</sup> <a name="vectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfig"></a>

```typescript
public readonly vectorConfig: GoogleFirestoreIndexFieldsVectorConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference">GoogleFirestoreIndexFieldsVectorConfigOutputReference</a>

---

##### `arrayConfigInput`<sup>Optional</sup> <a name="arrayConfigInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfigInput"></a>

```typescript
public readonly arrayConfigInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `vectorConfigInput`<sup>Optional</sup> <a name="vectorConfigInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfigInput"></a>

```typescript
public readonly vectorConfigInput: GoogleFirestoreIndexFieldsVectorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---

##### `arrayConfig`<sup>Required</sup> <a name="arrayConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfig"></a>

```typescript
public readonly arrayConfig: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirestoreIndexFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>

---


### GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference <a name="GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

new googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirestoreIndexFieldsVectorConfigFlat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---


### GoogleFirestoreIndexFieldsVectorConfigOutputReference <a name="GoogleFirestoreIndexFieldsVectorConfigOutputReference" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

new googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat">putFlat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetFlat">resetFlat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlat` <a name="putFlat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat"></a>

```typescript
public putFlat(value: GoogleFirestoreIndexFieldsVectorConfigFlat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetFlat` <a name="resetFlat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetFlat"></a>

```typescript
public resetFlat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flat">flat</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference">GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flatInput">flatInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimension">dimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flat`<sup>Required</sup> <a name="flat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flat"></a>

```typescript
public readonly flat: GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference">GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: number;
```

- *Type:* number

---

##### `flatInput`<sup>Optional</sup> <a name="flatInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flatInput"></a>

```typescript
public readonly flatInput: GoogleFirestoreIndexFieldsVectorConfigFlat;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimension"></a>

```typescript
public readonly dimension: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirestoreIndexFieldsVectorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---


### GoogleFirestoreIndexTimeoutsOutputReference <a name="GoogleFirestoreIndexTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirestoreIndex } from '@cdktf/provider-google-beta'

new googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirestoreIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---



