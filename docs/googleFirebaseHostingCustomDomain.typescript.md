# `googleFirebaseHostingCustomDomain` Submodule <a name="`googleFirebaseHostingCustomDomain` Submodule" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingCustomDomain <a name="GoogleFirebaseHostingCustomDomain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain google_firebase_hosting_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain(scope: Construct, id: string, config: GoogleFirebaseHostingCustomDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig">GoogleFirebaseHostingCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig">GoogleFirebaseHostingCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetCertPreference">resetCertPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetRedirectTarget">resetRedirectTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetWaitDnsVerification">resetWaitDnsVerification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseHostingCustomDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

---

##### `resetCertPreference` <a name="resetCertPreference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetCertPreference"></a>

```typescript
public resetCertPreference(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRedirectTarget` <a name="resetRedirectTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetRedirectTarget"></a>

```typescript
public resetRedirectTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitDnsVerification` <a name="resetWaitDnsVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetWaitDnsVerification"></a>

```typescript
public resetWaitDnsVerification(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseHostingCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirebaseHostingCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseHostingCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseHostingCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseHostingCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cert">cert</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList">GoogleFirebaseHostingCustomDomainCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.hostState">hostState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.issues">issues</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList">GoogleFirebaseHostingCustomDomainIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.ownershipState">ownershipState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.requiredDnsUpdates">requiredDnsUpdates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference">GoogleFirebaseHostingCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreferenceInput">certPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomainInput">customDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTargetInput">redirectTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerificationInput">waitDnsVerificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreference">certPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomain">customDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTarget">redirectTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerification">waitDnsVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cert"></a>

```typescript
public readonly cert: GoogleFirebaseHostingCustomDomainCertList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList">GoogleFirebaseHostingCustomDomainCertList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `hostState`<sup>Required</sup> <a name="hostState" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.hostState"></a>

```typescript
public readonly hostState: string;
```

- *Type:* string

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.issues"></a>

```typescript
public readonly issues: GoogleFirebaseHostingCustomDomainIssuesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList">GoogleFirebaseHostingCustomDomainIssuesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownershipState`<sup>Required</sup> <a name="ownershipState" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.ownershipState"></a>

```typescript
public readonly ownershipState: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requiredDnsUpdates`<sup>Required</sup> <a name="requiredDnsUpdates" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.requiredDnsUpdates"></a>

```typescript
public readonly requiredDnsUpdates: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseHostingCustomDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference">GoogleFirebaseHostingCustomDomainTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `certPreferenceInput`<sup>Optional</sup> <a name="certPreferenceInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreferenceInput"></a>

```typescript
public readonly certPreferenceInput: string;
```

- *Type:* string

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `redirectTargetInput`<sup>Optional</sup> <a name="redirectTargetInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTargetInput"></a>

```typescript
public readonly redirectTargetInput: string;
```

- *Type:* string

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseHostingCustomDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

---

##### `waitDnsVerificationInput`<sup>Optional</sup> <a name="waitDnsVerificationInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerificationInput"></a>

```typescript
public readonly waitDnsVerificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certPreference`<sup>Required</sup> <a name="certPreference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreference"></a>

```typescript
public readonly certPreference: string;
```

- *Type:* string

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `redirectTarget`<sup>Required</sup> <a name="redirectTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTarget"></a>

```typescript
public readonly redirectTarget: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `waitDnsVerification`<sup>Required</sup> <a name="waitDnsVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerification"></a>

```typescript
public readonly waitDnsVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingCustomDomainCert <a name="GoogleFirebaseHostingCustomDomainCert" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainCert: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert = { ... }
```


### GoogleFirebaseHostingCustomDomainCertVerification <a name="GoogleFirebaseHostingCustomDomainCertVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainCertVerification: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification = { ... }
```


### GoogleFirebaseHostingCustomDomainCertVerificationDns <a name="GoogleFirebaseHostingCustomDomainCertVerificationDns" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainCertVerificationDns: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns = { ... }
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainCertVerificationDnsDesired: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired = { ... }
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords = { ... }
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainCertVerificationDnsDiscovered: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered = { ... }
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords = { ... }
```


### GoogleFirebaseHostingCustomDomainCertVerificationHttp <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttp" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainCertVerificationHttp: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp = { ... }
```


### GoogleFirebaseHostingCustomDomainConfig <a name="GoogleFirebaseHostingCustomDomainConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainConfig: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.customDomain">customDomain</a></code> | <code>string</code> | The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.siteId">siteId</a></code> | <code>string</code> | The ID of the site in which to create this custom domain association. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.certPreference">certPreference</a></code> | <code>string</code> | A field that lets you specify which SSL certificate type Hosting creates for your domain name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.redirectTarget">redirectTarget</a></code> | <code>string</code> | A domain name that this CustomDomain should direct traffic towards. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.waitDnsVerification">waitDnsVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#custom_domain GoogleFirebaseHostingCustomDomain#custom_domain}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

The ID of the site in which to create this custom domain association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#site_id GoogleFirebaseHostingCustomDomain#site_id}

---

##### `certPreference`<sup>Optional</sup> <a name="certPreference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.certPreference"></a>

```typescript
public readonly certPreference: string;
```

- *Type:* string

A field that lets you specify which SSL certificate type Hosting creates for your domain name.

Spark plan 'CustomDomain's only have access to the
'GROUPED' cert type, while Blaze plan can select any option. Possible values: ["GROUPED", "PROJECT_GROUPED", "DEDICATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#cert_preference GoogleFirebaseHostingCustomDomain#cert_preference}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}.

---

##### `redirectTarget`<sup>Optional</sup> <a name="redirectTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.redirectTarget"></a>

```typescript
public readonly redirectTarget: string;
```

- *Type:* string

A domain name that this CustomDomain should direct traffic towards.

If
specified, Hosting will respond to requests against this CustomDomain
with an HTTP 301 code, and route traffic to the specified 'redirect_target'
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#redirect_target GoogleFirebaseHostingCustomDomain#redirect_target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseHostingCustomDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#timeouts GoogleFirebaseHostingCustomDomain#timeouts}

---

##### `waitDnsVerification`<sup>Optional</sup> <a name="waitDnsVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.waitDnsVerification"></a>

```typescript
public readonly waitDnsVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'.

If false, Terraform will not wait for DNS records on the 'CustomDomain'. Any issues in
the 'CustomDomain' will be returned and stored in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#wait_dns_verification GoogleFirebaseHostingCustomDomain#wait_dns_verification}

---

### GoogleFirebaseHostingCustomDomainIssues <a name="GoogleFirebaseHostingCustomDomainIssues" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainIssues: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues = { ... }
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdates <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdates" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainRequiredDnsUpdates: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates = { ... }
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired = { ... }
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords = { ... }
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered = { ... }
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords = { ... }
```


### GoogleFirebaseHostingCustomDomainTimeouts <a name="GoogleFirebaseHostingCustomDomainTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

const googleFirebaseHostingCustomDomainTimeouts: googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#create GoogleFirebaseHostingCustomDomain#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#delete GoogleFirebaseHostingCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#update GoogleFirebaseHostingCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#create GoogleFirebaseHostingCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#delete GoogleFirebaseHostingCustomDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firebase_hosting_custom_domain#update GoogleFirebaseHostingCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingCustomDomainCertList <a name="GoogleFirebaseHostingCustomDomainCertList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainCertOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainCertOutputReference <a name="GoogleFirebaseHostingCustomDomainCertOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList">GoogleFirebaseHostingCustomDomainCertVerificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert">GoogleFirebaseHostingCustomDomainCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `verification`<sup>Required</sup> <a name="verification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.verification"></a>

```typescript
public readonly verification: GoogleFirebaseHostingCustomDomainCertVerificationList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList">GoogleFirebaseHostingCustomDomainCertVerificationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainCert;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert">GoogleFirebaseHostingCustomDomainCert</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.records"></a>

```typescript
public readonly records: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.rdata">rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.rdata"></a>

```typescript
public readonly rdata: string;
```

- *Type:* string

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.requiredAction"></a>

```typescript
public readonly requiredAction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.records"></a>

```typescript
public readonly records: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.rdata">rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.rdata"></a>

```typescript
public readonly rdata: string;
```

- *Type:* string

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.requiredAction"></a>

```typescript
public readonly requiredAction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.checkTime">checkTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.desired">desired</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.discovered">discovered</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns">GoogleFirebaseHostingCustomDomainCertVerificationDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkTime`<sup>Required</sup> <a name="checkTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.checkTime"></a>

```typescript
public readonly checkTime: string;
```

- *Type:* string

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.desired"></a>

```typescript
public readonly desired: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList</a>

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.discovered"></a>

```typescript
public readonly discovered: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainCertVerificationDns;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns">GoogleFirebaseHostingCustomDomainCertVerificationDns</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationHttpList <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttpList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.desired">desired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.discovered">discovered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.lastCheckTime">lastCheckTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp">GoogleFirebaseHostingCustomDomainCertVerificationHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.desired"></a>

```typescript
public readonly desired: string;
```

- *Type:* string

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.discovered"></a>

```typescript
public readonly discovered: string;
```

- *Type:* string

---

##### `lastCheckTime`<sup>Required</sup> <a name="lastCheckTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.lastCheckTime"></a>

```typescript
public readonly lastCheckTime: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainCertVerificationHttp;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp">GoogleFirebaseHostingCustomDomainCertVerificationHttp</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationList <a name="GoogleFirebaseHostingCustomDomainCertVerificationList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainCertVerificationOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList">GoogleFirebaseHostingCustomDomainCertVerificationHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification">GoogleFirebaseHostingCustomDomainCertVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.dns"></a>

```typescript
public readonly dns: GoogleFirebaseHostingCustomDomainCertVerificationDnsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsList</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.http"></a>

```typescript
public readonly http: GoogleFirebaseHostingCustomDomainCertVerificationHttpList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList">GoogleFirebaseHostingCustomDomainCertVerificationHttpList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainCertVerification;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification">GoogleFirebaseHostingCustomDomainCertVerification</a>

---


### GoogleFirebaseHostingCustomDomainIssuesList <a name="GoogleFirebaseHostingCustomDomainIssuesList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainIssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainIssuesOutputReference <a name="GoogleFirebaseHostingCustomDomainIssuesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues">GoogleFirebaseHostingCustomDomainIssues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainIssues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues">GoogleFirebaseHostingCustomDomainIssues</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.records"></a>

```typescript
public readonly records: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata">rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata"></a>

```typescript
public readonly rdata: string;
```

- *Type:* string

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction"></a>

```typescript
public readonly requiredAction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.records"></a>

```typescript
public readonly records: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata">rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata"></a>

```typescript
public readonly rdata: string;
```

- *Type:* string

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction"></a>

```typescript
public readonly requiredAction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.checkTime">checkTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.desired">desired</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.discovered">discovered</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates">GoogleFirebaseHostingCustomDomainRequiredDnsUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkTime`<sup>Required</sup> <a name="checkTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.checkTime"></a>

```typescript
public readonly checkTime: string;
```

- *Type:* string

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.desired"></a>

```typescript
public readonly desired: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList</a>

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.discovered"></a>

```typescript
public readonly discovered: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingCustomDomainRequiredDnsUpdates;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates">GoogleFirebaseHostingCustomDomainRequiredDnsUpdates</a>

---


### GoogleFirebaseHostingCustomDomainTimeoutsOutputReference <a name="GoogleFirebaseHostingCustomDomainTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingCustomDomain } from '@cdktf/provider-google-beta'

new googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseHostingCustomDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

---



