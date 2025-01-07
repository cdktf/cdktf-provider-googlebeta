# `googleDataCatalogTag` Submodule <a name="`googleDataCatalogTag` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogTag <a name="GoogleDataCatalogTag" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag google_data_catalog_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

new googleDataCatalogTag.GoogleDataCatalogTag(scope: Construct, id: string, config: GoogleDataCatalogTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig">GoogleDataCatalogTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig">GoogleDataCatalogTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields"></a>

```typescript
public putFields(value: IResolvable | GoogleDataCatalogTagFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataCatalogTagTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetColumn"></a>

```typescript
public resetColumn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataCatalogTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

googleDataCatalogTag.GoogleDataCatalogTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataCatalogTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataCatalogTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataCatalogTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList">GoogleDataCatalogTagFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateDisplayname">templateDisplayname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference">GoogleDataCatalogTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fieldsInput">fieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.template">template</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fields"></a>

```typescript
public readonly fields: GoogleDataCatalogTagFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList">GoogleDataCatalogTagFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateDisplayname`<sup>Required</sup> <a name="templateDisplayname" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateDisplayname"></a>

```typescript
public readonly templateDisplayname: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataCatalogTagTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference">GoogleDataCatalogTagTimeoutsOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | GoogleDataCatalogTagFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataCatalogTagTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogTagConfig <a name="GoogleDataCatalogTagConfig" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.Initializer"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

const googleDataCatalogTagConfig: googleDataCatalogTag.GoogleDataCatalogTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.fields">fields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>[]</code> | fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.template">template</a></code> | <code>string</code> | The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.column">column</a></code> | <code>string</code> | Resources like Entry can have schemas associated with them. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.parent">parent</a></code> | <code>string</code> | The name of the parent this tag is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | GoogleDataCatalogTagFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#fields GoogleDataCatalogTag#fields}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#template GoogleDataCatalogTag#template}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Resources like Entry can have schemas associated with them.

This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#column GoogleDataCatalogTag#column}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The name of the parent this tag is attached to.

This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#parent GoogleDataCatalogTag#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataCatalogTagTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#timeouts GoogleDataCatalogTag#timeouts}

---

### GoogleDataCatalogTagFields <a name="GoogleDataCatalogTagFields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.Initializer"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

const googleDataCatalogTagFields: googleDataCatalogTag.GoogleDataCatalogTagFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#field_name GoogleDataCatalogTag#field_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.boolValue">boolValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Holds the value for a tag field with boolean type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.doubleValue">doubleValue</a></code> | <code>number</code> | Holds the value for a tag field with double type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.enumValue">enumValue</a></code> | <code>string</code> | The display name of the enum value. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.stringValue">stringValue</a></code> | <code>string</code> | Holds the value for a tag field with string type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.timestampValue">timestampValue</a></code> | <code>string</code> | Holds the value for a tag field with timestamp type. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#field_name GoogleDataCatalogTag#field_name}.

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Holds the value for a tag field with boolean type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#bool_value GoogleDataCatalogTag#bool_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

Holds the value for a tag field with double type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#double_value GoogleDataCatalogTag#double_value}

---

##### `enumValue`<sup>Optional</sup> <a name="enumValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.enumValue"></a>

```typescript
public readonly enumValue: string;
```

- *Type:* string

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#enum_value GoogleDataCatalogTag#enum_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Holds the value for a tag field with string type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#string_value GoogleDataCatalogTag#string_value}

---

##### `timestampValue`<sup>Optional</sup> <a name="timestampValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.timestampValue"></a>

```typescript
public readonly timestampValue: string;
```

- *Type:* string

Holds the value for a tag field with timestamp type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#timestamp_value GoogleDataCatalogTag#timestamp_value}

---

### GoogleDataCatalogTagTimeouts <a name="GoogleDataCatalogTagTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.Initializer"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

const googleDataCatalogTagTimeouts: googleDataCatalogTag.GoogleDataCatalogTagTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#create GoogleDataCatalogTag#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#delete GoogleDataCatalogTag#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#update GoogleDataCatalogTag#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#create GoogleDataCatalogTag#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#delete GoogleDataCatalogTag#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_data_catalog_tag#update GoogleDataCatalogTag#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogTagFieldsList <a name="GoogleDataCatalogTagFieldsList" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

new googleDataCatalogTag.GoogleDataCatalogTagFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get"></a>

```typescript
public get(index: number): GoogleDataCatalogTagFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataCatalogTagFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>[]

---


### GoogleDataCatalogTagFieldsOutputReference <a name="GoogleDataCatalogTagFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

new googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetEnumValue">resetEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetTimestampValue">resetTimestampValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetDoubleValue"></a>

```typescript
public resetDoubleValue(): void
```

##### `resetEnumValue` <a name="resetEnumValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetEnumValue"></a>

```typescript
public resetEnumValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```

##### `resetTimestampValue` <a name="resetTimestampValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetTimestampValue"></a>

```typescript
public resetTimestampValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValueInput">enumValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValueInput">timestampValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValue">doubleValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValue">enumValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValue">timestampValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValueInput"></a>

```typescript
public readonly doubleValueInput: number;
```

- *Type:* number

---

##### `enumValueInput`<sup>Optional</sup> <a name="enumValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValueInput"></a>

```typescript
public readonly enumValueInput: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `timestampValueInput`<sup>Optional</sup> <a name="timestampValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValueInput"></a>

```typescript
public readonly timestampValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

---

##### `enumValue`<sup>Required</sup> <a name="enumValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValue"></a>

```typescript
public readonly enumValue: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `timestampValue`<sup>Required</sup> <a name="timestampValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValue"></a>

```typescript
public readonly timestampValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataCatalogTagFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>

---


### GoogleDataCatalogTagTimeoutsOutputReference <a name="GoogleDataCatalogTagTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataCatalogTag } from '@cdktf/provider-google-beta'

new googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataCatalogTagTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

---



