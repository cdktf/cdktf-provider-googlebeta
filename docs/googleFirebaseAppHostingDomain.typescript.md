# `googleFirebaseAppHostingDomain` Submodule <a name="`googleFirebaseAppHostingDomain` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppHostingDomain <a name="GoogleFirebaseAppHostingDomain" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain google_firebase_app_hosting_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain(scope: Construct, id: string, config: GoogleFirebaseAppHostingDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig">GoogleFirebaseAppHostingDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig">GoogleFirebaseAppHostingDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.putServe">putServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetServe">resetServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServe` <a name="putServe" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.putServe"></a>

```typescript
public putServe(value: GoogleFirebaseAppHostingDomainServe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.putServe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe">GoogleFirebaseAppHostingDomainServe</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseAppHostingDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts">GoogleFirebaseAppHostingDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServe` <a name="resetServe" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetServe"></a>

```typescript
public resetServe(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppHostingDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isConstruct"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isTerraformElement"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isTerraformResource"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.generateConfigForImport"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirebaseAppHostingDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAppHostingDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAppHostingDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppHostingDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.customDomainStatus">customDomainStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList">GoogleFirebaseAppHostingDomainCustomDomainStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.purgeTime">purgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.serve">serve</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference">GoogleFirebaseAppHostingDomainServeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference">GoogleFirebaseAppHostingDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.serveInput">serveInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe">GoogleFirebaseAppHostingDomainServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts">GoogleFirebaseAppHostingDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customDomainStatus`<sup>Required</sup> <a name="customDomainStatus" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.customDomainStatus"></a>

```typescript
public readonly customDomainStatus: GoogleFirebaseAppHostingDomainCustomDomainStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList">GoogleFirebaseAppHostingDomainCustomDomainStatusList</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.purgeTime"></a>

```typescript
public readonly purgeTime: string;
```

- *Type:* string

---

##### `serve`<sup>Required</sup> <a name="serve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.serve"></a>

```typescript
public readonly serve: GoogleFirebaseAppHostingDomainServeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference">GoogleFirebaseAppHostingDomainServeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppHostingDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference">GoogleFirebaseAppHostingDomainTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serveInput`<sup>Optional</sup> <a name="serveInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.serveInput"></a>

```typescript
public readonly serveInput: GoogleFirebaseAppHostingDomainServe;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe">GoogleFirebaseAppHostingDomainServe</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseAppHostingDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts">GoogleFirebaseAppHostingDomainTimeouts</a>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppHostingDomainConfig <a name="GoogleFirebaseAppHostingDomainConfig" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainConfig: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.backend">backend</a></code> | <code>string</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.domainId">domainId</a></code> | <code>string</code> | Id of the domain to create. Must be a valid domain name, such as "foo.com". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.location">location</a></code> | <code>string</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#id GoogleFirebaseAppHostingDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#project GoogleFirebaseAppHostingDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.serve">serve</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe">GoogleFirebaseAppHostingDomainServe</a></code> | serve block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts">GoogleFirebaseAppHostingDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#backend GoogleFirebaseAppHostingDomain#backend}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Id of the domain to create. Must be a valid domain name, such as "foo.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#domain_id GoogleFirebaseAppHostingDomain#domain_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#location GoogleFirebaseAppHostingDomain#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#id GoogleFirebaseAppHostingDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#project GoogleFirebaseAppHostingDomain#project}.

---

##### `serve`<sup>Optional</sup> <a name="serve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.serve"></a>

```typescript
public readonly serve: GoogleFirebaseAppHostingDomainServe;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe">GoogleFirebaseAppHostingDomainServe</a>

serve block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#serve GoogleFirebaseAppHostingDomain#serve}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppHostingDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts">GoogleFirebaseAppHostingDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#timeouts GoogleFirebaseAppHostingDomain#timeouts}

---

### GoogleFirebaseAppHostingDomainCustomDomainStatus <a name="GoogleFirebaseAppHostingDomainCustomDomainStatus" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatus.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatus: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatus = { ... }
```


### GoogleFirebaseAppHostingDomainCustomDomainStatusIssues <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusIssues" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssues.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatusIssues: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssues = { ... }
```


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates = { ... }
```


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired = { ... }
```


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError = { ... }
```


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords = { ... }
```


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered = { ... }
```


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError = { ... }
```


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords = { ... }
```


### GoogleFirebaseAppHostingDomainServe <a name="GoogleFirebaseAppHostingDomainServe" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainServe: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect">GoogleFirebaseAppHostingDomainServeRedirect</a></code> | redirect block. |

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe.property.redirect"></a>

```typescript
public readonly redirect: GoogleFirebaseAppHostingDomainServeRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect">GoogleFirebaseAppHostingDomainServeRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#redirect GoogleFirebaseAppHostingDomain#redirect}

---

### GoogleFirebaseAppHostingDomainServeRedirect <a name="GoogleFirebaseAppHostingDomainServeRedirect" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainServeRedirect: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect.property.uri">uri</a></code> | <code>string</code> | The URI of the redirect's intended destination. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect.property.status">status</a></code> | <code>string</code> | The status code to use in a redirect response. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI of the redirect's intended destination.

This URI will be
prepended to the original request path. URI without a scheme are
assumed to be HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#uri GoogleFirebaseAppHostingDomain#uri}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status code to use in a redirect response.

Must be a valid HTTP 3XX
status code. Defaults to 302 if not present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#status GoogleFirebaseAppHostingDomain#status}

---

### GoogleFirebaseAppHostingDomainTimeouts <a name="GoogleFirebaseAppHostingDomainTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingDomainTimeouts: googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#create GoogleFirebaseAppHostingDomain#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#delete GoogleFirebaseAppHostingDomain#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#update GoogleFirebaseAppHostingDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#create GoogleFirebaseAppHostingDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#delete GoogleFirebaseAppHostingDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_firebase_app_hosting_domain#update GoogleFirebaseAppHostingDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssues">GoogleFirebaseAppHostingDomainCustomDomainStatusIssues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatusIssues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssues">GoogleFirebaseAppHostingDomainCustomDomainStatusIssues</a>

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.certState">certState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.hostState">hostState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.issues">issues</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList">GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.ownershipState">ownershipState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.requiredDnsUpdates">requiredDnsUpdates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatus">GoogleFirebaseAppHostingDomainCustomDomainStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certState`<sup>Required</sup> <a name="certState" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.certState"></a>

```typescript
public readonly certState: string;
```

- *Type:* string

---

##### `hostState`<sup>Required</sup> <a name="hostState" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.hostState"></a>

```typescript
public readonly hostState: string;
```

- *Type:* string

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.issues"></a>

```typescript
public readonly issues: GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList">GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList</a>

---

##### `ownershipState`<sup>Required</sup> <a name="ownershipState" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.ownershipState"></a>

```typescript
public readonly ownershipState: string;
```

- *Type:* string

---

##### `requiredDnsUpdates`<sup>Required</sup> <a name="requiredDnsUpdates" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.requiredDnsUpdates"></a>

```typescript
public readonly requiredDnsUpdates: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatus">GoogleFirebaseAppHostingDomainCustomDomainStatus</a>

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError</a>

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.checkError">checkError</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkError`<sup>Required</sup> <a name="checkError" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.checkError"></a>

```typescript
public readonly checkError: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.records"></a>

```typescript
public readonly records: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired</a>

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata">rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.relevantState">relevantState</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata"></a>

```typescript
public readonly rdata: string;
```

- *Type:* string

---

##### `relevantState`<sup>Required</sup> <a name="relevantState" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.relevantState"></a>

```typescript
public readonly relevantState: string[];
```

- *Type:* string[]

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction"></a>

```typescript
public readonly requiredAction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords</a>

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError</a>

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.checkError">checkError</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkError`<sup>Required</sup> <a name="checkError" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.checkError"></a>

```typescript
public readonly checkError: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.records"></a>

```typescript
public readonly records: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered</a>

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata">rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.relevantState">relevantState</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata"></a>

```typescript
public readonly rdata: string;
```

- *Type:* string

---

##### `relevantState`<sup>Required</sup> <a name="relevantState" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.relevantState"></a>

```typescript
public readonly relevantState: string[];
```

- *Type:* string[]

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction"></a>

```typescript
public readonly requiredAction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords</a>

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference <a name="GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.checkTime">checkTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.desired">desired</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.discovered">discovered</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkTime`<sup>Required</sup> <a name="checkTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.checkTime"></a>

```typescript
public readonly checkTime: string;
```

- *Type:* string

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.desired"></a>

```typescript
public readonly desired: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList</a>

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.discovered"></a>

```typescript
public readonly discovered: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates">GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates</a>

---


### GoogleFirebaseAppHostingDomainServeOutputReference <a name="GoogleFirebaseAppHostingDomainServeOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.putRedirect"></a>

```typescript
public putRedirect(value: GoogleFirebaseAppHostingDomainServeRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect">GoogleFirebaseAppHostingDomainServeRedirect</a>

---

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.resetRedirect"></a>

```typescript
public resetRedirect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference">GoogleFirebaseAppHostingDomainServeRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect">GoogleFirebaseAppHostingDomainServeRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe">GoogleFirebaseAppHostingDomainServe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.redirect"></a>

```typescript
public readonly redirect: GoogleFirebaseAppHostingDomainServeRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference">GoogleFirebaseAppHostingDomainServeRedirectOutputReference</a>

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.redirectInput"></a>

```typescript
public readonly redirectInput: GoogleFirebaseAppHostingDomainServeRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect">GoogleFirebaseAppHostingDomainServeRedirect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainServe;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServe">GoogleFirebaseAppHostingDomainServe</a>

---


### GoogleFirebaseAppHostingDomainServeRedirectOutputReference <a name="GoogleFirebaseAppHostingDomainServeRedirectOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect">GoogleFirebaseAppHostingDomainServeRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingDomainServeRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainServeRedirect">GoogleFirebaseAppHostingDomainServeRedirect</a>

---


### GoogleFirebaseAppHostingDomainTimeoutsOutputReference <a name="GoogleFirebaseAppHostingDomainTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingDomain } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts">GoogleFirebaseAppHostingDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseAppHostingDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDomain.GoogleFirebaseAppHostingDomainTimeouts">GoogleFirebaseAppHostingDomainTimeouts</a>

---



