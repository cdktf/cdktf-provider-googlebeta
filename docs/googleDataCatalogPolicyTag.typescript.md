# `googleDataCatalogPolicyTag` Submodule <a name="`googleDataCatalogPolicyTag` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogPolicyTag <a name="GoogleDataCatalogPolicyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag google_data_catalog_policy_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer"></a>

```typescript
import { googleDataCatalogPolicyTag } from '@cdktf/provider-google-beta'

new googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag(scope: Construct, id: string, config: GoogleDataCatalogPolicyTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig">GoogleDataCatalogPolicyTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig">GoogleDataCatalogPolicyTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetParentPolicyTag">resetParentPolicyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataCatalogPolicyTagTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentPolicyTag` <a name="resetParentPolicyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetParentPolicyTag"></a>

```typescript
public resetParentPolicyTag(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataCatalogPolicyTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isConstruct"></a>

```typescript
import { googleDataCatalogPolicyTag } from '@cdktf/provider-google-beta'

googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformElement"></a>

```typescript
import { googleDataCatalogPolicyTag } from '@cdktf/provider-google-beta'

googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformResource"></a>

```typescript
import { googleDataCatalogPolicyTag } from '@cdktf/provider-google-beta'

googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport"></a>

```typescript
import { googleDataCatalogPolicyTag } from '@cdktf/provider-google-beta'

googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataCatalogPolicyTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataCatalogPolicyTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataCatalogPolicyTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogPolicyTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.childPolicyTags">childPolicyTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference">GoogleDataCatalogPolicyTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.parentPolicyTagInput">parentPolicyTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.taxonomyInput">taxonomyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.parentPolicyTag">parentPolicyTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.taxonomy">taxonomy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `childPolicyTags`<sup>Required</sup> <a name="childPolicyTags" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.childPolicyTags"></a>

```typescript
public readonly childPolicyTags: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataCatalogPolicyTagTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference">GoogleDataCatalogPolicyTagTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentPolicyTagInput`<sup>Optional</sup> <a name="parentPolicyTagInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.parentPolicyTagInput"></a>

```typescript
public readonly parentPolicyTagInput: string;
```

- *Type:* string

---

##### `taxonomyInput`<sup>Optional</sup> <a name="taxonomyInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.taxonomyInput"></a>

```typescript
public readonly taxonomyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataCatalogPolicyTagTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentPolicyTag`<sup>Required</sup> <a name="parentPolicyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.parentPolicyTag"></a>

```typescript
public readonly parentPolicyTag: string;
```

- *Type:* string

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.taxonomy"></a>

```typescript
public readonly taxonomy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogPolicyTagConfig <a name="GoogleDataCatalogPolicyTagConfig" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.Initializer"></a>

```typescript
import { googleDataCatalogPolicyTag } from '@cdktf/provider-google-beta'

const googleDataCatalogPolicyTagConfig: googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.displayName">displayName</a></code> | <code>string</code> | User defined name of this policy tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.taxonomy">taxonomy</a></code> | <code>string</code> | Taxonomy the policy tag is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.description">description</a></code> | <code>string</code> | Description of this policy tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#id GoogleDataCatalogPolicyTag#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.parentPolicyTag">parentPolicyTag</a></code> | <code>string</code> | Resource name of this policy tag's parent policy tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User defined name of this policy tag.

It must: be unique within the parent
taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#display_name GoogleDataCatalogPolicyTag#display_name}

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.taxonomy"></a>

```typescript
public readonly taxonomy: string;
```

- *Type:* string

Taxonomy the policy tag is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#taxonomy GoogleDataCatalogPolicyTag#taxonomy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of this policy tag.

It must: contain only unicode characters, tabs,
newlines, carriage returns and page breaks; and be at most 2000 bytes long when
encoded in UTF-8. If not set, defaults to an empty description.
If not set, defaults to an empty description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#description GoogleDataCatalogPolicyTag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#id GoogleDataCatalogPolicyTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentPolicyTag`<sup>Optional</sup> <a name="parentPolicyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.parentPolicyTag"></a>

```typescript
public readonly parentPolicyTag: string;
```

- *Type:* string

Resource name of this policy tag's parent policy tag.

If empty, it means this policy tag is a top level policy tag.
If not set, defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#parent_policy_tag GoogleDataCatalogPolicyTag#parent_policy_tag}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataCatalogPolicyTagTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#timeouts GoogleDataCatalogPolicyTag#timeouts}

---

### GoogleDataCatalogPolicyTagTimeouts <a name="GoogleDataCatalogPolicyTagTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.Initializer"></a>

```typescript
import { googleDataCatalogPolicyTag } from '@cdktf/provider-google-beta'

const googleDataCatalogPolicyTagTimeouts: googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#create GoogleDataCatalogPolicyTag#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#delete GoogleDataCatalogPolicyTag#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#update GoogleDataCatalogPolicyTag#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#create GoogleDataCatalogPolicyTag#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#delete GoogleDataCatalogPolicyTag#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_catalog_policy_tag#update GoogleDataCatalogPolicyTag#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogPolicyTagTimeoutsOutputReference <a name="GoogleDataCatalogPolicyTagTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataCatalogPolicyTag } from '@cdktf/provider-google-beta'

new googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataCatalogPolicyTagTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a>

---



