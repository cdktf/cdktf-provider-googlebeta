# `googleEssentialContactsContact` Submodule <a name="`googleEssentialContactsContact` Submodule" id="@cdktf/provider-google-beta.googleEssentialContactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEssentialContactsContact <a name="GoogleEssentialContactsContact" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact google_essential_contacts_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer"></a>

```typescript
import { googleEssentialContactsContact } from '@cdktf/provider-google-beta'

new googleEssentialContactsContact.GoogleEssentialContactsContact(scope: Construct, id: string, config: GoogleEssentialContactsContactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig">GoogleEssentialContactsContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig">GoogleEssentialContactsContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleEssentialContactsContactTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEssentialContactsContact resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isConstruct"></a>

```typescript
import { googleEssentialContactsContact } from '@cdktf/provider-google-beta'

googleEssentialContactsContact.GoogleEssentialContactsContact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformElement"></a>

```typescript
import { googleEssentialContactsContact } from '@cdktf/provider-google-beta'

googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformResource"></a>

```typescript
import { googleEssentialContactsContact } from '@cdktf/provider-google-beta'

googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport"></a>

```typescript
import { googleEssentialContactsContact } from '@cdktf/provider-google-beta'

googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleEssentialContactsContact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEssentialContactsContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEssentialContactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEssentialContactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference">GoogleEssentialContactsContactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.languageTagInput">languageTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.notificationCategorySubscriptionsInput">notificationCategorySubscriptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.languageTag">languageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.notificationCategorySubscriptions">notificationCategorySubscriptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEssentialContactsContactTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference">GoogleEssentialContactsContactTimeoutsOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageTagInput`<sup>Optional</sup> <a name="languageTagInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.languageTagInput"></a>

```typescript
public readonly languageTagInput: string;
```

- *Type:* string

---

##### `notificationCategorySubscriptionsInput`<sup>Optional</sup> <a name="notificationCategorySubscriptionsInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.notificationCategorySubscriptionsInput"></a>

```typescript
public readonly notificationCategorySubscriptionsInput: string[];
```

- *Type:* string[]

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleEssentialContactsContactTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageTag`<sup>Required</sup> <a name="languageTag" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.languageTag"></a>

```typescript
public readonly languageTag: string;
```

- *Type:* string

---

##### `notificationCategorySubscriptions`<sup>Required</sup> <a name="notificationCategorySubscriptions" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.notificationCategorySubscriptions"></a>

```typescript
public readonly notificationCategorySubscriptions: string[];
```

- *Type:* string[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEssentialContactsContactConfig <a name="GoogleEssentialContactsContactConfig" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.Initializer"></a>

```typescript
import { googleEssentialContactsContact } from '@cdktf/provider-google-beta'

const googleEssentialContactsContactConfig: googleEssentialContactsContact.GoogleEssentialContactsContactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.email">email</a></code> | <code>string</code> | The email address to send notifications to. This does not need to be a Google account. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.languageTag">languageTag</a></code> | <code>string</code> | The preferred language for notifications, as a ISO 639-1 language code. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.notificationCategorySubscriptions">notificationCategorySubscriptions</a></code> | <code>string[]</code> | The categories of notifications that the contact will receive communications for. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.parent">parent</a></code> | <code>string</code> | The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#id GoogleEssentialContactsContact#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address to send notifications to. This does not need to be a Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#email GoogleEssentialContactsContact#email}

---

##### `languageTag`<sup>Required</sup> <a name="languageTag" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.languageTag"></a>

```typescript
public readonly languageTag: string;
```

- *Type:* string

The preferred language for notifications, as a ISO 639-1 language code.

See Supported languages for a list of supported languages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#language_tag GoogleEssentialContactsContact#language_tag}

---

##### `notificationCategorySubscriptions`<sup>Required</sup> <a name="notificationCategorySubscriptions" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.notificationCategorySubscriptions"></a>

```typescript
public readonly notificationCategorySubscriptions: string[];
```

- *Type:* string[]

The categories of notifications that the contact will receive communications for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#notification_category_subscriptions GoogleEssentialContactsContact#notification_category_subscriptions}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#parent GoogleEssentialContactsContact#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#id GoogleEssentialContactsContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEssentialContactsContactTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#timeouts GoogleEssentialContactsContact#timeouts}

---

### GoogleEssentialContactsContactTimeouts <a name="GoogleEssentialContactsContactTimeouts" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.Initializer"></a>

```typescript
import { googleEssentialContactsContact } from '@cdktf/provider-google-beta'

const googleEssentialContactsContactTimeouts: googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#create GoogleEssentialContactsContact#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#delete GoogleEssentialContactsContact#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#update GoogleEssentialContactsContact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#create GoogleEssentialContactsContact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#delete GoogleEssentialContactsContact#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_essential_contacts_contact#update GoogleEssentialContactsContact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEssentialContactsContactTimeoutsOutputReference <a name="GoogleEssentialContactsContactTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleEssentialContactsContact } from '@cdktf/provider-google-beta'

new googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleEssentialContactsContactTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a>

---



